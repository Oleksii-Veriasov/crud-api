# crud-api
Task: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md

Done 19.06.2022 / deadline 19.06.2022

Score: 102 / 202

Implemented:
+10 The repository with the application contains a Readme.md file containing detailed instructions for installing, running and using the application

+10 GET api/user implemented properly

+10 GET api/user/${userId} implemented properly

+10 POST api/user implemented properly

+6 Users are stored in the form described in the technical requirements

+6 Value of port on which application is running is stored in .env file

+30 Task implemented on Typescript

+10 Errors on the server side that occur during the processing of a request should be handled and processed properly

+10 Development mode: npm script start:dev implemented properly

+10 Production mode: npm script start:prod implemented properly



Not implemented: don't have time( and some trouble with ts(

-10 PUT api/user/{userId} not implemented 

-10 DELETE api/user/${userId} not implemented 

-10 Processing of requests to non-existing endpoints implemented properly

-30 There are tests for API (not less than 3 scenarios)

-30 There is horizontal scaling for application with a load balancer 15/30 i implement worker threads but not create shared memory.


Used plugins: nodemon, dotenv, cross-env, typescript, ts-node, uuid

.env file contains only
PORT = 4000

start script in dev:   start:dev
start script in prod:   start:prodv