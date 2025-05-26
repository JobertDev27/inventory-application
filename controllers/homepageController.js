import query from "../data/query.js";
import { body, validationResult } from "express-validator";

export async function homepage(req, res) {
  const { search } = req.query;
  if (search) {
    const searchData = await query.getQueryWeapons(search);
    return res.render("home", { title: "Search Result", weapons: searchData });
  }
  const weaponsData = await query.getAllWeapons();
  res.render("home", { title: "Homepage", weapons: weaponsData });
}

export async function weaponPage(req, res) {
  const weaponId = req.params.weaponId;
  const queryWeapon = await query.getWeaponsById(weaponId);
  res.render("itemPage", { weapon: queryWeapon[0] });
}
