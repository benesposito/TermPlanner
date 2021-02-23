import express from 'express';
import { TermName } from '../../defs/defs';
import { Term } from '../../defs/term';
import { User } from '../../defs/user';
import { ApiRequests, ApiResponses } from './defs/defs';
import { State } from './defs/state';

const router = express.Router();
const state = new State();

router.get('/', (req, res, next) => {
	console.log('Received api ping');
	res.sendStatus(200);
	next();
});

router.post('/addUser', (req: ApiRequests.AddUserRequest, res, next) => {
	console.log(req.body);
	if(!req.body.username) {
		res.sendStatus(422);
		return;
	}

	try {
		state.addUser(req.body.username);
		res.sendStatus(200);
	} catch(e) {
		res.sendStatus(422);
	}
	next();
});

router.get('/getUser', (req: ApiRequests.GetUserRequest, res, next) => {
	let user = state.getUser(req.query.username);

	if(!user) {
		res.sendStatus(422);
		return;
	}

	res.send(user);
	next();
});

router.post('/addTerm', (req: ApiRequests.AddTermRequest, res, next) => {
	let user: User;
	let term_name: TermName;

	user = state.getUser(req.body.username);

	if(!user) {
		res.sendStatus(422);
		return;
	}

	if(req.body.term_name) {
		term_name = req.body.term_name;
	}

	if(!term_name) {
		res.sendStatus(422);
		return;
	}

	try {
		user.addTerm(term_name);
	} catch(e) {
		res.sendStatus(422);
		return;
	}

	res.sendStatus(200);
	next();
});

router.post('/addCourse', (req: ApiRequests.AddCourseRequest, res, next) => {
	let user: User;
	let term: Term;

	try {
		user = state.getUser(req.body.username);
		next();
	} catch(e) {
		res.sendStatus(422);
		return;
	}

	if(req.body.term_name) {
		term = user.getTerm(req.body.term_name);
	}

	if(!term) {
		res.sendStatus(422);
		return;
	}

	try {
		term.addCourse(req.body.course);
	} catch(e) {
		res.sendStatus(422);
		return;
	}

	res.sendStatus(200);
	next();
});

/* Log State */
router.use((req, res, next) => {
	console.log(state);
	next();
});

export = router;
