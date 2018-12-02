var http = require('http');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
import { USERNAME, PASSWORD, SERVER, DATABASE, ENCRYPT } from './constants.js'


var server = http.createServer(function(request, response) {



    var config =
    {
        userName: USERNAME, // update me
        password: PASSWORD, // update me
        server: SERVER, // update me
        options:
        {
            database: DATABASE, //update me
            encrypt: ENCRYPT
        }
    }
    var connection = new Connection(config);

    // Attempt to connect and execute queries if connection goes through
    connection.on('connect', function(err)
        {
            if (err)
            {
                console.log(err)
            }
            else
            {
              response.writeHead(200, {"Content-Type": "text/plain"});
              response.end("successfully connected to DB!");
                //do queries
            }
        }
    );

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
// Create connection to database
