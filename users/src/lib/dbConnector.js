const { DB_URI } = require("../config");

establishDBConnection = ()=> {
  const mongoose = mainModule.mongoose;

  let options = {
    useNewUrlParser: true ,
    keepAlive: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }

  if(process.env.NODE_ENV){
    options["user"] = "root";
    options["pass"]= "password123"
  }
  
  mongoose.connect(DB_URI, 
      options
  );

  let db = mongoose.connection;

  db.once('open', () => {
    mainModule.utils.log('connected to the database')  
  });

  db.on('error', (error)=>{
    console.error.bind(console, 'MongoDB connection error:')(error);
  });

  return db;
}

module.exports = {
  establishDBConnection: establishDBConnection
};