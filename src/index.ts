import "dotenv/config";
import http from "http";
import os from "os";
// import cluster from "cluster";
// import { v4 as uuidv4 } from "uuid";
const PORT = process.env.PORT;

console.log(PORT);
const pid = process.pid;

import userService from "./services/userService";
import { getReqData } from "./helpers/getReqData";
import { IUser, ICandidate } from "./interfaces";
import { uuidValidateV4 } from "./helpers/checkUuid";

const userData = userService;
console.log(userData);

const server = http.createServer(async (req, res) => {
  if (req.url?.startsWith("/api/users/") && req.method === "GET") {
    console.log(req.url.split("/").at(-1));
    let id: any = req.url.split("/").at(-1);
    if (uuidValidateV4(id)) {
      const userSearch = await userData.apiGetUser(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(userSearch));
    } else if (uuidValidateV4(id)) {
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.end("This userId is invalid");
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end("This userId doesn't exist");
    }
  } else if (req.url === "/api/users" && req.method === "GET") {
    const users = await userData.apiGetUsers();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else if (req.url === "/api/users" && req.method === "POST") {
    let body: any = await getReqData(req);
    res.writeHead(201, { "Content-Type": "application/json" });
    console.log(body);
    const newUser = await userData.apiCreateUser(JSON.parse(body));
    console.log(JSON.stringify(userData));
    res.end(JSON.stringify(userData));
  } else if (req.url === "/api/users" && req.method === "PUT") {
    // let body: any = await getReqData(req);
    // res.writeHead(200, { "Content-Type": "application/json" });
    // console.log(body);
    // const newUser = await userData.apiCreateUser(JSON.parse(body));
    // console.log(JSON.stringify(userData));
    // res.end(body);
  } else if (req.url === "/api/users" && req.method === "DELETE") {
    // let body: any = await getReqData(req);
    // res.writeHead(204, { "Content-Type": "application/json" });
    // console.log(body);
    // const newUser = await userData.apiCreateUser(JSON.parse(body));
    // console.log(JSON.stringify(userData));
    // res.end(body);
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
