// A factory function for our plugin, it will be called, when Karma needs to
// instantiate a plugin. Normally it should return an instance of the service
// conforming to the API requirements of the plugin type (more on that below),
// but for our simple example we don't need any service and just print
// a message when function is called.
function helloFrameworkFactory() {
    console.log('Hello, world!')
}

module.exports = {
    // Declare the plugin, so Karma knows that it exists.
    // 'factory' tells Karma that it should call `helloFrameworkFactory`
    // function and use whatever it returns as a service for the DI token
    // `framework:hello`.
    'framework:hello': ['factory', helloFrameworkFactory]
};