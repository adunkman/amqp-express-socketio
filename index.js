var port = 3000,
    http = require("http"),
    amqp = require("amqp"),
    socketio = require("socket.io"),
    express = require("express"),
    rabbitMq = amqp.createConnection({ host: 'localhost' }),
    app = express(),
    server = http.createServer(app),
    io = socketio.listen(server);

rabbitMq.on("ready", function () {
  var queue = rabbitMq.queue("items", function () {
    queue.bind("#"); // to all messages

    queue.subscribe(function (message) {
      io.sockets.emit("new-item", message.data.toString());
    });
  });
});

app.get("/", function (req, res) {
  res.sendfile(__dirname + "/index.html");
});

server.listen(port);
console.log("listening on port " + port);