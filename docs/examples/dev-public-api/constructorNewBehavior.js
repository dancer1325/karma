const karma = require('karma')
const parseConfig = karma.config.parseConfig
const Server = karma.Server     // 👀extracted as constant, to reuse it 👀
const fs = require('fs')

// 💡 ALL -- is based on -- parseConfig() 💡
parseConfig(
    null,
    {
        port: 9876,
        files: ['*.js'],
        browsers: ['Chrome']
    },
    { promiseConfig: true, throwErrors: true }
).then(
    (karmaConfig) => {
        // 1. new karma.Server(options,  [callback=process.exit])
        const server = new Server(karmaConfig, function doneCallback(exitCode) {
            console.log('Karma has exited with ' + exitCode)
            process.exit(exitCode)
        });
        console.log(server);

        // 3.  `server.refreshFiles()` -> trigger a file list refresh
        server.refreshFiles();

        // 2. `server.start()`
        server.start();      // start the Karma server

        // 4. `server.refreshFile('path')`
        setTimeout(() => {
            // Update the file content
            const newContent = `
function add(a, b) {
  return a + b;
}

module.exports = {
  add,
  version: '1.0.1' // Changed version number
};
`
            fs.writeFileSync('./simpleModule.js', newContent)

            console.log('File updated, triggering refresh...')
            server.refreshFile('./simpleModule.js')
        }, 5000)

    },
    (rejectReason) => { /* respond to the rejection reason error */ }
);