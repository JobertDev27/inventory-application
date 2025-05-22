import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function getAllWeapons() {
  const { res } = await pool.query("SELECT * FROM weapons");
  return res; // return an array of items containing weapons
}

async function getQueryWeapons(searchQuery) {
  const { res } = await pool.query(
    `SELECT * FROM weapons WHERE name ILIKE $1`,
    [`%${searchQuery}%`] // using placeholders to protect against injection
  );
  return res;
}

async function getWeaponsByType(type) {
  const { res } = await pool.query("SELECT * FROM weapons WHERE type IN $1", [
    [[type]],
  ]);
  return res;
}

export default { getAllWeapons, getQueryWeapons, getWeaponsByType };
