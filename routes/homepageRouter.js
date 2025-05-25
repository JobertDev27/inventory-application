import { Router } from "express";
import {
  homepage,
  weaponPage,
  weapondPagePost,
} from "../controllers/homepageController.js";

const route = Router();

route.get("/", homepage);
route.get("/:weaponId", weaponPage);
route.post(":weaponId", weapondPagePost);
export default route;
