drop table if exists reimbursement;
drop table if exists "user";
drop table if exists "role";
drop table if exists reimbursementstatus;
drop table if exists reimbursementtype;


/*initialize tables*/---------------------------------------------------
CREATE TABLE "role"
(
roleid int not null,
"role" text not null unique,
constraint pk_role PRIMARY KEY (roleid)
);

CREATE TABLE reimbursementstatus
(
statusid int not null,
status text not null,
constraint pk_reimbursementstatus PRIMARY KEY  (statusid)
);

CREATE TABLE reimbursementtype
(
typeid int not null, 
"type" text not null, 
constraint pk_reimbursementtype PRIMARY KEY (typeid)
);

CREATE TABLE "user"
(
userid int not null,
username text not null unique,
"password" text not null,
firstName text not null,
lastName text not null,
email text not null,
"role" int not null,
constraint pk_user PRIMARY KEY (userid),
constraint fk_role foreign key ("role") references "role" (roleid)
);

CREATE TABLE reimbursement
(
reimbursementid int not null, 
author int not null,
amount int not null,
dateSubmitted int not null,
dateResolved int not null,
description text not null,
resolver int not null,
status int not null,
"type" int not null,
 constraint pk_reimbursement PRIMARY KEY  (reimbursementid),
 constraint fk_status foreign key (status) references reimbursementstatus (statusid),
 constraint fk_type foreign key ("type") references reimbursementtype (typeid),
 constraint fk_user_resolver foreign key (resolver) references "user" (userid),
 constraint fk_user_author foreign key (author) references "user" (userid)
);

/*End of Initilization*/--------------------------------------------------------------------

/*Fill database with data*/
INSERT INTO "role" (roleid, "role") VALUES (1, 'employee');
INSERT INTO "role" (roleid, "role") VALUES (2, 'admin');
INSERT INTO "role" (roleid, "role") VALUES (3, 'finance-manager');

INSERT INTO "user" (userid, username, "password", firstName, lastName, email, "role") VALUES (1, 'bob', 'bobpassword', 'bobby', 'gravelle', 'bob@gmail.com', 1);
INSERT INTO "user" (userid, username, "password", firstName, lastName, email, "role") VALUES (2, 'tom', 'tompassword', 'tommy', 'williby', 'tom@gmail.com', 2);
INSERT INTO "user" (userid, username, "password", firstName, lastName, email, "role") VALUES (3, 'fred', 'fredpassword', 'freddy', 'Russel', 'fred@gmail.com', 3);

INSERT INTO reimbursementstatus (statusid, status) VALUES (1, 'Pending');
INSERT INTO reimbursementstatus (statusid, status) VALUES (2, 'Approved');
INSERT INTO reimbursementstatus (statusid, status) VALUES (3, 'Denied');

INSERT INTO reimbursementtype (typeid, "type") VALUES (1, 'Lodging');
INSERT INTO reimbursementtype (typeid, "type") VALUES (2, 'Travel');
INSERT INTO reimbursementtype (typeid, "type") VALUES (3, 'Food');
INSERT INTO reimbursementtype (typeid, "type") VALUES (4, 'Other');

INSERT INTO reimbursement (reimbursementid, author, amount, dateSubmitted, dateResolved, description, resolver, status, "type") VALUES (1, 1, 20, 120819, 103039,
    'Travel to Tampa Florida', 2, 1, 1);
INSERT INTO reimbursement (reimbursementid, author, amount, dateSubmitted, dateResolved, description, resolver, status, "type") VALUES (2, 2, 50, 120819, 103039,
    'Got a Wendys Burger', 3, 1, 2);
INSERT INTO reimbursement (reimbursementid, author, amount, dateSubmitted, dateResolved, description, resolver, status, "type") VALUES (2, 2, 50, 120819, 103039,
    'Steak Dinner RoadHouse', 3, 1, 2);
















