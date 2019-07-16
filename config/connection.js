var mysql = require("mysql");

var connection;
// = mysql.createConnection({
//   host: "localhost",
//   port: 3301,
//   user: "root",
//   password: "Monday15!",
//   database: "impromptu"
// });

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
      host: "localhost",
      port: 3301,
      user: "root",
      password: "Monday15!",
      database: "impromptu"
});
};

// Make connection.
connection.connect();
  function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export to ORM to use.
  module.exports = connection;