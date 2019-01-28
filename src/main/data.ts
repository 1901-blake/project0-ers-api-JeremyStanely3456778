// This is to be used instead of a database at the current time

import { Role } from './models/role';
import { User } from './models/user';
import { Reimbursementtype } from './models/reimbursementtype';
import { Reimbursement } from './models/reimbursement';
import  { Reimbursementstatus } from './models/reimbursementstatus';

// Data to be tested, once api is fully built

const CompanyEmployee = new Role(1, 'employee');
const administrator = new Role(2, 'admin');
const financeManager = new Role(3, 'finance-manager');
export let roles: Role[] = [CompanyEmployee, administrator, financeManager];

const bob: User = new User(1, 'bob', 'password', 'bob', 'gravelle', 'bob@gmail.com', CompanyEmployee);
const tom: User = new User(2, 'tom', 'tom', 'tom', 'stanley', 'tom@gmail.com', administrator);
const fred: User = new User(3, 'fred', 'Rodgers', 'fred', 'codebeast', 'fred@hotmail.com', financeManager);
export let users: User[] = [bob, tom, fred];

const pending: Reimbursementstatus = new Reimbursementstatus(1, 'Pending');
const approved: Reimbursementstatus = new Reimbursementstatus(2, 'Approved');
const denied: Reimbursementstatus = new Reimbursementstatus(3, 'Denied');
export let reimburseStatuses: Reimbursementstatus[] = [pending, approved, denied];

const lodging: Reimbursementtype = new Reimbursementtype(1, 'Lodging');
const travel: Reimbursementtype = new Reimbursementtype(2, 'Travel');
const food: Reimbursementtype = new Reimbursementtype(3, 'Food');
const other: Reimbursementtype = new Reimbursementtype(4, 'Other');
export let reimbursetypes: Reimbursementtype[] = [lodging, travel, food, other];


const reimburseA: Reimbursement = new Reimbursement(1, 1, 20, 120819, 103039,
    'Travel to Tampa Florida', 2, 1, 1);
const reimburseB: Reimbursement = new Reimbursement(2, 2, 50, 120819, 103039,
    'Got a Wendys Burger', 3, 1, 2);
export let reimbursements: Reimbursement[] = [reimburseA, reimburseB];