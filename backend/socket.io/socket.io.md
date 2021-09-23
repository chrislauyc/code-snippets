## socket.io snippets

The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.

### Server

Things to import

```js
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
```
The normal express stuff

```js
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
```

Use socket.io to emit

```js
// listening to the connection event
io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    // disconnect event
    console.log('user disconnected');
  });
});
```

Use http to listen

```js
http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
```

### Client

Loading the socket.io-client and exposes io global

```html
<script src="/socket.io/socket.io.js"></script>
<script>
    var socket = io();
</script>
```

## Specifics on emitting events

### Client

On form submit, emit data with "chat message" as the key

```html
<script>
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
    });
</script>
```

### Server

On the server, socket.on will listen for the chat message

```js

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    //
  });
});

```
### Client

```html
<script>
    socket.on('chat message', function(msg) {
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    });
</script>
```

### Server

```js
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
```

## Broadcasting

If you want to send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket:

```js
io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
});
```
Send the message to everyone, including the sender.

```js
io.on('connection', (socket) => {
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});
```
