
let port = 5000;

mainModule = this;
require('./src/lib/dependencies').requireDependencies();
mainModule.db = require('./src/lib/dbConnector').establishDBConnection(); 

function startServer() {
  let app = mainModule.app;
  require('./src/lib/middlewares').usingMiddlewares(app);
  
  app.listen(port, () => {
    console.log("users-service running on localhost:" + port);
    console.log("--------------------------");
  });
  
}

startServer();


process.on('unhandledRejection', (reason, p) =>
  console.error('Unhandled Rejection at: Promise ', p, reason)
);

process.on('uncaughtException', async (error)=>{
  console.log("uncaughtException ", error)
  process.exit(0)
});

process.on('SIGINT', async ()=>{
  console.log("SIGINT")
  process.exit(0)
});

process.on('SIGTERM', async ()=>{
  console.log("SIGTERM")
  process.exit(0)
});