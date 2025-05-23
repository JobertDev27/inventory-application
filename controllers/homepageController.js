import query from "../data/query.js";

export async function homepage(req, res) {
  const weaponsData = await query.getAllWeapons();
  console.log(query.getAllWeapons);
  res.render("home", { title: "Homepage", weapons: weaponsData });
}
