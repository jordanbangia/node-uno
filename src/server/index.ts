import express from 'express';
import path from 'path';

import { logger } from '../logger';

const port = 8080;

const staticPath = path.join(path.resolve(__dirname, '../..'), 'dist/client/');
logger.info(staticPath);

const app = express();
app.use(express.static(staticPath));
app.use('/static', express.static(staticPath));

app.get('/hello', (req, res) => {
    res.send('hi 👋');
});

app.listen(port, () => {
    logger.info(`server start at http://localhost:${port}`);
});
