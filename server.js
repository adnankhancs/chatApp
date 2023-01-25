const express=require('express');
const { Socket } = require('net');
const app=express();

const http=require('http').createServer(app);
const PORT=process.env.PORT || 3000;
http.listen(PORT, () =>{
    console.log("listening port at "+PORT)
})
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');

})

// socket ka kaam

const io=require('socket.io')(http)

io.on('connection',(socket)=>{
    console.log("socket connect hogya sir...");
    socket.on('message',(msg)=>{
        // console.log("sendmessge:"+msg['user']+':'+msg['message']);
        console.log(msg);
        socket.broadcast.emit('message',msg);
    });
})