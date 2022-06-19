import "dotenv/config";
import http from "http";
// import os from "os";
// import cluster from "cluster";
// import { v4 as uuidv4 } from "uuid";
const PORT = process.env.PORT;

console.log(PORT);
const pid = process.pid;

import userService from "./services/userService";
import { getReqData } from "./helpers/getReqData";
import { IUser, ICandidate } from "./interfaces";

const userData = userService;
console.log(userData);

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    const users = await userData.apiGetUsers();
    //response headers
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response

    // res.write("Hi there, This is a Vanilla Node.js API");
    //end the response
    res.end(JSON.stringify(users));
  } else if (req.url === "/api/users" && req.method === "POST") {
    //response headers

    let body: any = await getReqData(req);
    res.writeHead(200, { "Content-Type": "application/json" });
    console.log(body);
    const newUser = await userData.apiCreateUser(JSON.parse(body));
    console.log(JSON.stringify(userData));
    // res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    // res.write(body);
    //end the response
    res.end(body);
  }

  // If no route present
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
