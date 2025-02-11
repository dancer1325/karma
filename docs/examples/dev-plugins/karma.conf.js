module.exports = (config) => {
    config.set({
        plugins: [
            require('./hello-plugin')
        ],
        // Activate our plugin by specifying its unique name in the
        // corresponding configuration key.
        frameworks: ['hello']
    })
}