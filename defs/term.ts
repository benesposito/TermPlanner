import { Course, TermName } from "./defs";
import { InvalidParamError } from "./error";

export class Term {
	readonly name: TermName;
	readonly courses: Course[] = [];

	constructor(name: TermName) {
		this.name = name;
	}

	/**
	 * Adds course to term
	 * 
	 * @param course Course to be added
	 * 
	 * @throws InvalidParamError on course already added to term
	 */
	public addCourse(course: Course) {
		try {
			this.getCourse(course.department, course.course_id);	
			throw new InvalidParamError();
		} catch(e) {
			/* success */
		}

		this.courses.push(course);
	}

	/**
	 * Gets course from term
	 * 
	 * @param department Department tag of course ([MATH] 261)
	 * @param course_id ID of course (MATH [261])
	 * 
	 * @returns Course matching department and course_id, or null if the course has not been added.
	 */
	public getCourse(department: string, course_id: number): Course {
		let course: Course = this.courses.find((course) => {
			return course.department == department &&
					course.course_id == course_id;
		});

		if(!course) {
			throw new InvalidParamError;
		}

		return course;
	}
}
