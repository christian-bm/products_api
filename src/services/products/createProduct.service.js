import database from "../../database";

const createProductService = async ({ name, price, category_id }) => {
  try {
    const result = await database.query(
      "INSERT INTO products(name, price, category_id) VALUES ($1,$2,$3) RETURNING *",
      [name, price, category_id]
    );

    return result.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

export default createProductService;
