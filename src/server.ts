import "reflect-metadata";

import express from "express";

import "./database";

const app = express();



app.listen(8085, () => console.log("Server started"));