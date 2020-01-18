const { Client } = require("pg");
const connectionString =
  "postgres://abassadamo:869480@localhost:5432/ecommerce_api";
const client = new Client({
  connectionString: connectionString
});
client.connect();
client.on("connect", () => {
  console.log("connected to the CRUD api db sucessfully");
});
                                                                         
const createCollections = (request, response) => {
  const { id, title, division, description, price, telephone,image_url } = request.body; //the requst.body parameter here is decoded with the body parser module
  client.query(
    "INSERT INTO collections (id, title, division, description, price, telephone, image_url ) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [id, title, division, description, price, telephone, image_url],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Collection added with ID: ${id} successfully`);
    }
  );
};

const getCollectionsById = (request, response) => {
  const id = parseInt(request.params.id);

  client.query("SELECT * FROM collections WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


const deleteCollectionsById = (request, response) => {
  const id = parseInt(request.params.id);

  client.query("DELETE FROM collections WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Collections with  ID: ${id} deleted successfully`);
  });
};

module.exports = {
  createCollections,
  getCollectionsById,
  deleteCollectionsById,
};
