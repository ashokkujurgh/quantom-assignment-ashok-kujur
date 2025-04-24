import express from 'express';
import * as dotenv from 'dotenv';
import * as http from 'http';
import * as bodyparser from 'body-parser';
import { connectDB } from './services/db/db_configs';
import { TaskRoutes } from './tasks/routes/task.router.config';


dotenv.config();
const app: express.Application = express();
const server: http.Server = http.createServer(app);


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

connectDB();

new TaskRoutes(app)

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Expose-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', req.header('Access-Control-Request-Headers'));
    if (req.method === 'OPTIONS') {
        return res.status(200).send();
    } else {
        return next();
    }
});

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('Server running at port ${3001}');
});

server.listen(3001, () => { });
export default app;
