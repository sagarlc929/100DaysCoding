const http = require('http');
const io = require('socket.io');

const server = http.createServer((req,res)=>{
  res.end('Server is running!');
});
const port = 3000;
server.listen(port,()=>{
  console.log(`Server is listening on port${port}`);
});

const ioServer = io.listen(server);
