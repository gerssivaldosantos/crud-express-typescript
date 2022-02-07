import "reflect-metadata";

import express from "express";

import "./database";

import { routes } from "./services/routes";

const app = express();

app.use(express.json());

app.use(routes)

app.listen(8085, () => console.log("Server started"));