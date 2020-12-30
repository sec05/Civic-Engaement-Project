const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", function(socket) {
  socket.on("join",(data)=>{
    socket.join(data.id);
    socket.broadcast.emit("join").to(data.id);
  });
  socket.on("message",(data)=>{
    socket.broadcast.emit("message").to(data.id);
  })
});

http.listen(4000, function() {
  console.log("listening on *:4000");
});