import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import { errors } from "celebrate";
import path from "path";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(3333);
