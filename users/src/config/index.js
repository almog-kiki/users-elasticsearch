
let DB_URI = "mongodb://localhost:27017/DB_NAME";

if (process.env.MONGO_DB_URI) {
  DB_URI = process.env.MONGO_DB_URI;
}

module.exports = {
  DB_URI
};

