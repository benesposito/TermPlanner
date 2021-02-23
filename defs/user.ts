import { TermName } from "./defs";
import { InvalidParamError } from "./error";
import { Term } from "./term";

export class User {
	readonly username: string;
	readonly terms: Term[];

	constructor(username: string) {
		this.username = username;
	}

	/**
	 * Adds term to user
	 * 
	 * @param name Name of term
	 * 
	 * @throws InvalidParamError on term already added
	 */
	public addTerm(name: TermName) {
		let term: Term = this.terms.find((term) => {
			return term.name == name;
		});

		if(term) {
			throw new InvalidParamError();
		}

		term = new Term(name);
		this.terms.push(term);
	}

	/**
	 * Gets a term. If it doesn't exist, an empty term is created
	 * and added to the user.
	 * 
	 * @param name - Term name
	 */
	public getTerm(name: TermName) {
		let term: Term = this.terms.find((term) => {
			return term.name == name;
		});

		if(!term) {
			this.addTerm(name);
		}

		return term;
	}
}
