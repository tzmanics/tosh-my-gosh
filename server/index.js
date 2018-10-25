const express = require('express')
const app = express()

const port = process.env.PORT || 3001

const server = app.listen(port, function() {
	console.log(`Example app listening on port ${port}!`))
}

const io = require('socket.io')(server)

io.on('connection', () => console.log(socket.id))

