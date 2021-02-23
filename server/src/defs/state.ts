import { InvalidParamError, NotImplementedError } from "../../../defs/error";
import { User } from "../../../defs/user";

export class State {
	readonly users: User[] = [];
	/* TODO: save state every n seconds */
	// private state_file: FileHandle;

	constructor() {

	}

	/**
	 * Adds new user
	 *
	 * @param username Username of user
	 *
	 * @throws InvalidParamError on user already added
	 */
	public addUser(username: string) {
		let user: User;

		user = this.getUser(username);

		if(user) {
			throw new InvalidParamError();
		}

		user = new User(username);
		this.users.push(user);
	}

	/**
	 * Gets existing user
	 *
	 * @param username Username of user, or null if user has not been defined
	 */
	public getUser(username: string): User {
		let user: User = this.users.find((user) => {
			return user.username == username;
		});

		if(!user) {
			return null;
		}

		return user;
	}

	/**
	 * Saves the state to a json file
	 */
	public save(): void {
		throw new NotImplementedError();
	}
}
