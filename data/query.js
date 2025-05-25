import dotenv from "dotenv";
import { name } from "ejs";
import { Pool } from "pg";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function getAllWeapons() {
  const { rows } = await pool.query("SELECT * FROM weapons");
  return rows; // return an array of items containing weapons
}

async function getQueryWeapons(searchQuery) {
  const { rows } = await pool.query(
    `SELECT * FROM weapons WHERE name ILIKE $1`,
    [`%${searchQuery}%`] // using placeholders to protect against injection
  );
  return rows;
}

async function getWeaponsByType(type) {
  const { rows } = await pool.query("SELECT * FROM weapons WHERE type IN $1", [
    [[type]],
  ]);
  return rows;
}

async function getWeaponsById(id) {
  const { rows } = await pool.query("SELECT * FROM weapons WHERE id = $1", [
    id,
  ]);
  return rows;
}

async function updateWeapon(data) {
  const { name, type, price, quality, id } = data;
  const toUpdateWeapon = await pool.query(
    "UPDATE weapons SET name = $1, price = $2, quality = $3, type = $4 WHERE id = $5",
    [name, price, quality, type, id]
  );
  return toUpdateWeapon;
}

export default {
  getAllWeapons,
  getQueryWeapons,
  getWeaponsByType,
  getWeaponsById,
};
