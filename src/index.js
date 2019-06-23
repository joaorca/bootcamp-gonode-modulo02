const server = require('./server')

server.listen(process.env.PORT || 8080)

process.on('SIGINT', () => process.exit())
