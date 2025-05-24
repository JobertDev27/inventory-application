import { Router } from "express";
import { homepage, weaponPage } from "../controllers/homepageController.js";

const route = Router();

route.get("/", homepage);
route.get("/:weaponId", weaponPage);

export default route;
