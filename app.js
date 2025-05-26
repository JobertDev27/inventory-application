import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

import homepageRouter from "./routes/homepageRouter.js";

const PORT = process.env.PORT || 8080;

const app = express();
// getting view filepath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", homepageRouter);

app.listen(PORT, "0.0.0.0", () => console.log(`Listening at port: ${PORT}`));
