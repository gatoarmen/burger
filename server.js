var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 8000;





// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  