// import
import express, { NextFunction } from 'express';
import bodyparser from 'body-parser';
import * as data from './main/data';
import session from 'express-session';
import { reimburserouter } from './main/routers/reimburse.router';
import { authrouter } from '../src/main/routers/auth.router';
import { userrouter } from '../src/main/routers/user.router';
import { UserDao } from '../src/main/dao/userdao';

const app = express();

app.use('/', express.static(__dirname + '/public/'));

app.use(bodyparser.json());

// this piece of code is used for logging

app.use((req, res, next) => {
    console.log(`Request was made with URL: ${req.path}
    and method: ${req.method}`);
    next();
    });

const sessionsettings = {
    secret: 'monkeyking',
    cookie: { secure: false },
    resave: false,
    saveUnitilialized: false
    };

app.use(session(sessionsettings));

app.use('/auth', authrouter);

    app.use('/users', userrouter);

app.use('/reimbursements', reimburserouter);

    app.listen(3500);

console.log('Employee Reimbursement System app started on port: 3500');

// Daos

const Userdao = new UserDao();
Userdao.getAllUsers().then(artarray => console.log(artarray));