import { Course, TermName } from './defs';

import { User } from './user';

export namespace ApiRequestBodies {

	export interface AddUser {
		username: string;
	}

	export interface GetUser {
		username: string;
	}

	export interface AddTerm {
		username: string,
		term_name: TermName
	}

	export interface AddCourse {
		username: string,
		term_name: TermName,
		course: Course
	}
}

export namespace ApiResponseBodies {
	export interface GetUser {
		user: User
	}
}
