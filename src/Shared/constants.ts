import { oneLine } from "common-tags";

export const COLLEGE_NAME = "University of Massachusetts Amherst College of Information and Computer Sciences";

export const UMASS_MAROON = "#832326";

export const ICON_URL = "";

export const DISCORD_RULES = {
	updated: "12/25/2020",
	preface:
		oneLine(`
		By joining this discord server, you are bound to the following rules.
		Failure to follow these rules will result in punishment.
		This discord server is not associated with the College of Information and Computer Sciences or the University of Massachusetts at Amherst.`) +
		"\n\n" +
		oneLine(`
		This server is dedicated to UMass Computer Science Professors, Staff, Students, and Prospects.
		Our goal is to create a welcoming environment for academic and casual conversation.
		Before posting, keep in mind of the reach of your message.
		There are over 1000 members in this server with around 400 average daily visitors.
		Your messages have the ability to leave an imprint on hundreds of people.
		Please make sure that it is positive.`) +
		"\n\n" +
		oneLine(`
		As adults, you should now how to conduct yourself in a public setting.
		**Although the following punishment system is rarely used, it is documented here just incase.**
		For instances of minor rule breaking, users will be given three strikes.
		On the third strike they will receive a 12h mute.
		Subsequent rule breaking behavior will result in 1 day, 2 day, 1w, and 2w mutes.
		It is extremely rare that someone gets muted.
		Be respectful and you will be fine.
		Major rule breaking will be dealt with on a case by case basis.
		Usually the individual in question will get a indefinite mute unit the moderators decide what is reasonable.`),
	rules: [
		{
			title: "Rule 1: Observe the Golden Rule",
			value: oneLine(`Do unto others as you would have them do unto you.
			Hate speech or harassment of any kind are strictly prohibited.
			This includes, but is not limited to, insults based on someone's ethnicity, race, gender, sexuality, or disability.
			If you take issue with someone and their behavior, either block or ignore their messages.
			If you believe that they are committing rule breaking actions, report it to the moderation team and it will be dealt with on a case-by-case basis.
			`),
		},
		{
			title: "Rule 2: Keep content appropriate for a College Audience",
			value: oneLine(`Use the demeanor that you might use when first meeting a classmate or speaking with members of a school club.
			Examples of inappropriate behavior: having an intense conversation about politics or religion, referencing gentiles, using sexual innuendos towards other users, using slurs or words derived from slurs.
			Light swearing is fine. But do not get carried away.`),
		},
		{
			title: "Rule 3: Follow the UMass Academic Honesty Policy",
			value: oneLine(`
			This includes: 
			discussing exam/assignment solutions before the solutions are released publicly, 
			**sharing code segments relating to assignments** (that were not distributed by the Professor), or
			indirectly sharing answers through other mediums (i.e Chegg).
			
			**All instances of cheating will be reported.**
			You can find more information about this rule [here](https://www.umass.edu/honesty/).
			`),
		},
		{
			title: "Rule 4: Follow Discord's Terms of Service",
			value: oneLine(`You can find information pertaining to this [here](https://discord.com/terms).
			You can find what we you are responsible for under the section titled "RULES OF CONDUCT AND USAGE".
			**As an extension of these rules, do not discuss, or lead an individual to, pirated material.**
			This also applies to course material. You are not allowed to distribute documents that you did not create yourself.
			**This includes, but is not limited to: lecture slides, homework assignments, exams, worksheets, recordings.**
			Exceptions to this rule are if the materials are publicly available or you have direct permission from the instructor.
			`),
		},
		{
			title: "Rule 5: Each user must have their discord nickname set to a real life name",
			value: oneLine(`If you don't know how to do this, then ping a moderator or admin to change it for you.
			If you are uncomfortable with using your name, **we suggest using a pet/nick name or the first letter of your name.**`),
		},
	],
	afterword: oneLine(`Keep in mind that by joining this discord you have lost part of your anonymity.
	**Rule breaking behavior on this server may result in real life consequences** from the University, College of Information and Computer Sciences, or other non-Discord parties.`),
};
