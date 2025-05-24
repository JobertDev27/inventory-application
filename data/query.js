import dotenv from "dotenv";
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

export default {
  getAllWeapons,
  getQueryWeapons,
  getWeaponsByType,
  getWeaponsById,
};
