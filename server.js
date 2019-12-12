var net = require('net')
var sum = 0

var server = net.createServer(socket => {
  socket.on('data', summand => {
    if (!parseInt(summand)) summand = 0
    sum = sum + parseInt(summand)
    socket.write('sum: ' + sum + '\n')
  })
})
server.listen(8888)
