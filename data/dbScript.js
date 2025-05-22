import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS weapons (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR (255),
    price INTEGER,
    quality INTEGER,
    type VARCHAR (255)
);

INSERT INTO weapons (name, price, quality, type)
VALUES
     ('rusty sword', 5, 1, 'sword'),
    ('blade', 10, 2, 'sword'),
    ('hero sword', 50, 5, 'sword'),
    ('lumberaxe', 7, 2, 'axe'),
    ('waraxe', 15, 3, 'axe'),
    ('blade tounge', 21, 3, 'spear'),
    ('blade spear', 16, 2, 'spear'),
    ('halberd', 12, 2, 'spear'),
    ('glaive', 23, 4, 'spear'),
    ('lance', 14, 2, 'spear'),
    ('hammer', 11, 2, 'blunt'),
    ('morningstar', 15, 3, 'blunt'),
    ('club', 10, 2, 'blunt'),
    ('scimitar', 31, 4, 'sword'),
    ('mace', 15, 3, 'blunt');
`;

(async function main() {
  console.log("seeding data...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done!");
})();
