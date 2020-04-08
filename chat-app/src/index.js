const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
const Filter = require('bad-words')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

let msg = "Welcome"

io.on('connection',(socket)=>{
  console.log('New Websocket connection')

  socket.emit('message','Welcome!');
  socket.broadcast.emit('message','A new user has joined')

  socket.on('sendMessage',(message,callback)=>{
    const filter = new Filter();
    if(filter.isProfane(message)){
      return callback('Profanity is not allowed!')
    }

    io.emit('message',message)
    callback('delivered')
  })

  socket.on('sendLocation',(data,callback)=>{
    // if(data.latitude == undefined || data.longitude==undefined){
    //   return callback('Location cant be send')
    // }
    io.emit('locationMessage',`https://google.com/maps?q=${data.latitude},${data.longitude}`)
    callback()
  })

  socket.on('disconnect',()=>{
    io.emit('message','A user has left')
  })
})


server.listen(3000, ()=>{
  console.log(`Server is runnning on port ${port}`)
})