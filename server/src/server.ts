import express from 'express';
import cors from 'cors';
import api from './api';

import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', api);

app.get('/', (req, res) => {
	console.log('Received root ping');
	res.sendStatus(200);
});

app.listen(4000, () => console.log(`Starting server on port ${4000}`));

export default app;
