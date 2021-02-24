import { Request } from 'express-serve-static-core';
import { ApiRequestBodies, ApiResponseBodies } from '../../../defs/api_bodies';

export namespace Requests {
	export type AddUser = Request<any, any, ApiRequestBodies.AddUser, any>
	export type GetUser = Request<any, ApiResponseBodies.GetUser, any, ApiRequestBodies.GetUser>
	export type AddTerm = Request<any, any, ApiRequestBodies.AddTerm, any>
	export type AddCourse = Request<any, any, ApiRequestBodies.AddCourse, any>
	export type GetUsers = Request<any, ApiResponseBodies.GetUsers, any, any>
}