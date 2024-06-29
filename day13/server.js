
const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('message', (message) => {
    console.log(`Received message from client: ${message}`);
    io.emit('message', message); // Broadcast message to all connected clients
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

