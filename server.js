const WebSocket = require('ws');
const https = require('https');
const fs = require('fs');

// Grab certificate
const server = https.createServer({
    cert: fs.readFileSync('/etc/letsencrypt/live/attendance.place/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/attendance.place/privkey.pem')
});

// Specify the server to websocket
const wss = new WebSocket.Server({
    server: server
});

// Specify port to listen to
server.listen(8080)


console.log("WebSocket online")
// waits for connection to be established from the client
// the callback argument ws is a unique for each client

var connections = 0;

wss.on('connection', (ws) => {
    console.log('attempted connect.');
    connections++;
    console.log(connections + ' clients connected');
    var aliveCheck = setInterval(check, 1000);
    function check() {
        if (ws.readyState !== 1) {
            connections--;
            ws.close();
            console.log(connections + ' clients connected');
            clearInterval(aliveCheck);
        }
    };

    // runs a callback on message event
    ws.on('message', (data) => {
        console.log('recieved websocket message: ' + data)

        if (data.includes("login")) {
            try {
                if (fs.existsSync("./users/" + data.substring( data.lastIndexOf("CGC_") + 4, data.lastIndexOf("&Q")) + ".json")) {
                    ws.send("logged in")
                } else {
                    ws.send("new user")
                }
            } catch (err) {
                console.error(err)
            }
        } else if (data.includes("register")) {

            let newUser = {
                "link": data.substring(data.lastIndexOf("register") + 8, data.lastIndexOf(" ")),
                "email": data.substring(data.lastIndexOf(" ") + 1, data.length)
            };

            newUser = JSON.stringify(newUser)

            fs.writeFile( "./users/" + data.substring(data.lastIndexOf("CGC_") + 4, data.lastIndexOf("&Q")) + '.json', newUser, (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON data is saved.");
            });


            ws.send("logged in")
        }

        /*if (data[0] == 'c' && connections == 2) {
            console.log('got a message')
            // sends the data to all connected clients
            if (message !== '') {
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        console.log('sent message to a client: ' + message);
                        client.send(message);
                    }
                });
            }
        }*/
    });
});