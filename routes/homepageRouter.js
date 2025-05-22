import { Router } from "express";
import { homepage } from "../controllers/homepageController.js";

const route = Router();

route.use("/", homepage);

export default route;
