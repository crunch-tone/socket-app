const server = require("http").createServer();
const io = require("socket.io")(server);
const portNum = 3001;

//const messages = [];

io.on("connection", function(client) {
  console.log("client connected");

  client.on("register", function(name) {
    console.log(`user ${name} is registred`);
  });

  client.on("message", function(message) {
    console.log(`the message is: ${message}`);
    //messages.push(JSON.parse(message));
  });

  client.on("disconnect", function() {
    console.log("client disconnect...");
  });

  client.on("error", function(err) {
    console.log("received error from client:");
    console.log(err);
  });
});

server.listen(portNum, function(err) {
  if (err) throw err;
  console.log(`listening on port ${portNum}`);
});
