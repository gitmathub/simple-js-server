# Simple Server

Showcase for client server communication.

## Instalation and Start
```bash
npm i
npm run start
```

Now the minimalistic server is running on port `8888`. It accepts numbers from a client and sums them up.

### Server Code

```js
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
```

### Client

When the server is running (`npm run start`) a client can send any string. If it's a number then server calculates the sum of all numbers sent.

Example: keyboard in put is: `3` then `4` then `8` and finally `a`.
```bash
$ nc localhost 8888
3
sum: 3
4
sum: 7
1
sum: 8
a
sum: 8
```