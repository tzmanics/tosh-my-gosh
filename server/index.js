const express = require('express')
const app = express()

const port = 3000

const server = app.listen(port, () => {
	console.log(`Toshmoji app listening on port ${port}!`)
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log(socket.id)
  socket.on('SEND_MESSAGE', (data) => io.emit('MESSAGE', data))
})

