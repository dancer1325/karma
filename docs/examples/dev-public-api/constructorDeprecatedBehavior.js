var Server = require('karma').Server
var karmaConfig = {port: 9876}
var server = new Server(karmaConfig, function(exitCode) {
    console.log('Karma has exited with ' + exitCode)
    process.exit(exitCode)
})