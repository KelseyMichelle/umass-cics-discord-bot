import nodecron from "node-cron";
import dotenv from "dotenv";

dotenv.config();

const { login, announce } = await import("Discord/server");
const { getInSessionSemester, getCurrentSemesters } = await import("UMass/calendar");

dotenv.config();
const sameDay = (d0: Date, d1: Date) =>
	d0.getUTCDate() === d1.getUTCDate() &&
	d0.getUTCMonth() === d1.getUTCMonth() &&
	d0.getUTCFullYear() === d1.getUTCFullYear();

async function academicCalendarAnnouncement() {
	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
	try {
		const semesters = await getCurrentSemesters();
		for (const semester of semesters) {
			for (const event of semester.events) {
				const date = event.date;
				if (sameDay(today, date)) {
					await announce(
						"university",
						`${semester.season} ${semester.year} Academic Calendar Notice **(TODAY)**: ${event.description}`,
					);
				} else if (sameDay(tomorrow, date)) {
					await announce(
						"general",
						`${semester.season} ${semester.year} Academic Calendar Notice **(TOMORROW)**: ${event.description}`,
					);
				}
			}
		}
	} catch (e) {
		console.warn(`Unable to post Academic Calendar Notice: ${e}`);
	}
}

const MS_PER_DAY = 1000 * 60 * 60 * 24;
async function semesterPercentAnnouncement() {
	try {
		const semester = await getInSessionSemester();
		if (semester) {
			const dayDiff = (d0: Date, d1: Date) => Math.ceil(Math.abs(d0.valueOf() - d1.valueOf()) / MS_PER_DAY);
			const semesterDays = dayDiff(semester.startDate, semester.endDate);
			const remainingDays = dayDiff(new Date(), semester.endDate);

			announce(
				"general",
				`We are currently **${Math.floor(
					((semesterDays - remainingDays) / semesterDays) * 100,
				)}%** through the semester (Not including exams).`,
			);
		}
	} catch (e) {
		console.warn(`Unable to post semester percentage: ${e}`);
	}
}

console.log("Logging in...");
login(process.env["DISCORD_TOKEN"]!)
	.then(() => {
		const localSchedule = (exp: string, func: () => void) =>
			nodecron.schedule(exp, func, {
				timezone: "America/New_York",
			});

		localSchedule("0 0 7 * * 1", semesterPercentAnnouncement);
		localSchedule("0 0 7 * * *", academicCalendarAnnouncement);
	})
	.catch(error => {
		console.error("[DISCORD] Unable to login: ", error);
		process.exit(-1);
	});