const development = {
  DATABASE_URL: process.env.CRUD_API_DATABASE,
  DOMAIN: "http://localhost:5000/",
  NODE_ENV: process.env.NODE_ENV,
  jwtSecretKey: process.env.CRUD_API_SECRET_KEY
};

export default development;5
