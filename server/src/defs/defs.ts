import { Course, TermName } from '../../../defs/defs';

import core from 'express-serve-static-core';
import { User } from '../../../defs/user';
import { InvalidParamError } from '../../../defs/error';

export namespace ApiRequests {
	interface Request<ReqBody=any, ReqQuery=core.Query> extends core.Request<core.ParamsDictionary, any, ReqBody, ReqQuery> { }

	interface AddUser {
		username: string;
	}

	interface GetUser {
		username: string;
	}

	interface AddTerm {
		username: string,
		term_name: TermName
	}

	interface AddCourse {
		username: string,
		term_name: TermName,
		course: Course
	}

	export type AddUserRequest = Request<AddUser>;
	export type GetUserRequest = Request<any, GetUser>;
	export type AddTermRequest = Request<AddTerm>;
	export type AddCourseRequest = Request<AddCourse>;
}

export namespace ApiResponses {
	export interface GetUserResponse {
		user: User
	}
}
