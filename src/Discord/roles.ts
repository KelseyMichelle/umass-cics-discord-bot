function matcher(regExp: RegExp) {
	return (str: string) => regExp.test(str.trim());
}

export const isClass = matcher(/^(cs|math|stat|cics|info)\s*\d{3}[a-z]*$/im);
export const isResidential = matcher(/^(central|ohill|northeast|southwest|honors|sylvan|off-campus)$/im);
export const isGraduationStatus = matcher(/^(alumni|graduate student|class of \d{4})$/im);
export const isInterdisciplinary = matcher(/^(business|linguistics|physics)$/im);
export const isMisc = matcher(/^(snooper|daily coding problems|community events)$/im);
export const isPronoun = matcher(/^(he\/him|she\/her|they\/them|ze\/hir)$/im);

const csMatcher = matcher(/^(cs|info)/im);
export function isCSClass(str: string): boolean {
	return isClass(str) && csMatcher(str);
}

const mathMatcher = matcher(/^(math|stat)/im);
export function isMathClass(str: string): boolean {
	return isClass(str) && mathMatcher(str);
}

export function isAssignable(str: string): boolean {
	return (
		isClass(str) ||
		isInterdisciplinary(str) ||
		isGraduationStatus(str) ||
		isResidential(str) ||
		isPronoun(str) ||
		isMisc(str)
	);
}