import express from 'express';
import { TermName } from '../../defs/defs';
import { Term } from '../../defs/term';
import { User } from '../../defs/user';
import { State } from './defs/state';
import { Requests } from './defs/api_requests';
import { ApiResponseBodies } from '../../defs/api_bodies';

const router = express.Router();
const state = new State();

router.get('/', (req, res, next) => {
	console.log('Received api ping');
	res.sendStatus(200);
	next();
});

router.post('/addUser', (req: Requests.AddUser, res, next) => {
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

router.get('/getUser', (req: Requests.GetUser, res, next) => {
	let response_body: ApiResponseBodies.GetUser;
	let user = state.getUser(req.query.username);

	if(!user) {
		res.sendStatus(422);
		return;
	}

	response_body.user = user;

	res.send(response_body);
	next();
});

router.post('/addTerm', (req: Requests.AddTerm, res, next) => {
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

router.post('/addCourse', (req: Requests.AddCourse, res, next) => {
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
