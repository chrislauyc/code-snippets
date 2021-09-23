## Server Initialization

```js
//create a Socket.IO server and attach it to a Node.js HTTP server.
const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
  },
});
```

## Client Initialization

```js
import { io } from "socket.io-client";

const URL = "http://localhost:3000";
const socket = io(URL, { autoConnect: false }); //set to false because will manually connect later using socket.connect()

export default socket;
```

Setting up catch-all listener to print all the events

```js
socket.onAny((event, ...args) => {
  console.log(event, args);
});
```

### Client - username

On form submission, call socket.connect()

```js
onUsernameSelection(username) {
  this.usernameAlreadySelected = true;
  socket.auth = { username };
  socket.connect();
}
```

### Server - username

a middleware which checks the username and allows the connection

```js
io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username; //added to attr to be reused
  next();
});
```

### Client - Connect Error Event Handler

connect_error event will be emitted upon connection failure

- low-level errors (server is down)
- middleware errors

```js
socket.on("connect_error", (err) => {
  if (err.message === "invalid username") {
    this.usernameAlreadySelected = false;
  }
});
```

handler for the connect_error is removed in the destroyed hook

So the listeners registered by our App component are cleaned up when the component is destroyed

```js
destroyed() {
  socket.off("connect_error");
}
```

### Server - listing all users

Upon connection, send the list of users to the client

```js
io.on("connection", (socket) => {
  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
      //We are looping over the io.of("/").sockets object, which is a Map of all currently connected Socket instances, indexed by ID.
    users.push({
      userID: id, //socket.id as the user ID of the application
      username: socket.username,
    });
  }
  //only retrieving the users of the current Socket.IO server (not suitable when scaling up)
  socket.emit("users", users);
  // ...
});
```