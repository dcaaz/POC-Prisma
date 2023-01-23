import express from "express";
import { finalizeTheOrder } from "./controllers/food-controller.js";
var server = express();
server.get('/finalize', finalizeTheOrder);
var port = 4000;
server.listen(port, function () { return console.log("Server running in port in ".concat(port)); });
