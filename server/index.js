const express = require('express')
const app = express()

const port = process.env.PORT || 3001

const server = app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log(socket.id)
  socket.on('SEND_MESSAGE', (data) => io.emit('MESSAGE', data))
})

