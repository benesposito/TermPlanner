
export enum TermName {
	WINTER_2021 = 202115,
	SPRING_2021 = 202125,
	SUMMER_2021 = 202135,
	FALL_2021 = 202145,
	WINTER_2022 = 202215,
	SPRING_2022 = 202225,
	SUMMER_2022 = 202235,
	FALL_2022 = 202245
}

export interface Course {
	department: string,
	course_id: number,
	sections: Section[]
}

/**
 * TODO: just use CRN and get the rest from TMS
 */
export interface Section {
	crn: number,
	section_id: number,
	type: SectionType,
	professor: string,
	timeslots: Timeslot[]
}

export enum SectionType {
	LECTURE,
	RECITATION,
	LAB
}

export interface Timeslot {
	day: DayOfWeek,
	begin_time: Time,
	end_time: Time
}

export enum DayOfWeek {
	SUNDAY,
	MONDAY,
	TUESDAY,
	WEDNESDAY,
	THURSDAY,
	FRIDAY,
	SATURDAY
};

export interface Time {
	hour: number,
	minute: number
}
