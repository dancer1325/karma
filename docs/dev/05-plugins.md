---
pageTitle: Developing Plugins
---

* Karma's plugins
  * 👀== way to extend Karma 👀 
  * kinds of plugins
    * *framework*,
      * connects a testing framework (_Example:_ Mocha) -- to a -- Karma API
        * -> browser -- can send test results, back to a -- Karma server 
    * *reporter*,
      * == how test results -- are reported to a -- user
    * *launcher*,
      * enable Karma -- to launch -- different browsers | run tests in
    * *preprocessor*
      * -- responsible for -- 
        * | before loading source files into a browser,
          * transforming/transpiling source files 
    * *middleware*
      * allows
        * customizing how files -- are served -- | browser

## Dependency injection

* Karma 
  * -- is assembled via -- [*dependency injection*](https://en.wikipedia.org/wiki/Dependency_injection)
  * == object /
    * 💡EACH key (== *DI token*) -- is mapped to a -- certain Karma object (== *service*) 💡
      * _Example:_ `config` DI token -- maps to -- `Config` instance / holds CURRENT Karma configuration
      * ⚠️NO EXIST exhaustive list of ALL AVAILABLE DI tokens & services⚠️ 
        * if you want to find them -> read Karma's or other plugins' source code
  * 's plugins -- via specifying a corresponding DI token, can request (or *inject*) -- VARIOUS Karma objects
    * | UPON injection, a plugin -- can via injected services, to implement -- their functionality

## Plugin structure

* plugin
  * 💡== service + its associated DI token 💡
  * if user [activates a plugin](../config/plugins.md) -> Karma 
    * looks for a corresponding DI token
    * instantiates a service / -- linked to this -- DI token
  * steps to declare it
    * define a DI token
    * explain Karma -- how to -- instantiate it 
  * use cases
    * MULTIPLE services / plugin
      * steps
        * adding MORE keys | object -- exported by the -- plugin
      * _Example:_ `framework` + `reporter` plugins
  * _Example:_ [create a custom Karma plugin](../examples/dev-plugins)

* DI token
  * == plugin type + plugin's unique name
    * plugin type
      * defines
        * what a plugin can do
        * service's API's requirements 
        * when it is instantiated 
    * plugin's unique name
      * uses
        * by the plugin user -- to activate a -- plugin

## Injecting dependencies

* TODO:
In "Dependency injection" section we discussed that it is possible to inject any Karma services into a plugin and interact with them.
This can be done by setting an `$inject` property on the plugin's factory function to an array of DI tokens plugin wishes to interact with. 
Karma will pick up this property and pass requested services to the factory functions as parameters.

Let's make the `hello` framework a bit more useful and make it add `hello.js` file to the `files` array. 
This way users of the plugin can, for example, access a function defined in `hello.js` from their tests.

```js
// hello-plugin.js

// Add parameters to the function to receive requested services.
function helloFrameworkFactory(config) {
  config.files.unshift({
    pattern: __dirname + '/hello.js',
    included: true,
    served: true,
    watched: false
  })
}

// Declare DI tokens plugin wants to inject.
helloFrameworkFactory.$inject = ['config']

module.exports = {
  'framework:hello': ['factory', helloFrameworkFactory]
};
```

The Karma config is unchanged and is omitted for brevity. 
See above example for the plugin usage.

Note: Currently, Karma uses [node-di] library as a DI implementation.
The library is more powerful than what's documented above, however, the DI implementation may change in the future, so we recommend not to rely on the node-di implementation details.

## Plugin types

This section outlines API requirements and conventions for different plugin types.
There also links to some plugins, which you can use for inspiration.

### Frameworks

- example plugins: [karma-jasmine], [karma-mocha], [karma-requirejs]
- use naming convention is `karma-*`
- use npm keywords `karma-plugin`, `karma-framework`.

A framework connects existing testing libraries to Karma's API, so that their results can be displayed in a browser and sent back to the server.

Karma frameworks _must_ implement a `window.__karma__.start` method that Karma will
call to start test execution. This function is called with an object that has methods
to send results back to karma:

* `.result` a single test has finished
* `.complete` the client completed execution of all the tests
* `.error` an error happened in the client
* `.info` other data (e.g. number of tests or debugging messages)

Most commonly you'll use the `result` method to send individual test success or failure
statuses. The method takes an object of the form:

```js
{
    // test id
    id: String,

     // test description
    description: String,

    // the suite to which this test belongs. potentially nested.
    suite: Array[String],

    // an array of string error messages that might explain a failure.
    // this is required if success is false.
    log: Array[String],

    success: Boolean, // pass / fail

    skipped: Boolean // skipped / ran
}
```

### Reporters

- example plugins: [karma-growl-reporter], [karma-junit-reporter], [karma-material-reporter]
- use naming convention is `karma-*-reporter`
- use npm keywords `karma-plugin`, `karma-reporter`

### Launchers

- example plugins: [karma-chrome-launcher], [karma-sauce-launcher]
- use naming convention is `karma-*-launcher`
- use npm keywords `karma-plugin`, `karma-launcher`

### Preprocessors

- example plugins: [karma-coffee-preprocessor], [karma-ng-html2js-preprocessor]
- use naming convention is `karma-*-preprocessor`
- user npm keywords `karma-plugin`, `karma-preprocessor`

A preprocessor is a function that accepts three arguments (`content`, `file`, and `next`), mutates the content in some way, and passes it on to the next preprocessor.

- arguments passed to preprocessor plugins:
  - **`content`** of the file being processed
  - **`file`** object describing the file being processed
     - **path:** the current file, mutable file path. e. g. `some/file.coffee` -> `some/file.coffee.js` _This path is mutable and may not actually exist._
     - **originalPath:** the original, unmutated path
     - **encodings:** A mutable, keyed object where the keys are a valid encoding type ('gzip', 'compress', 'br', etc.) and the values are the encoded content. Encoded content should be stored here and not resolved using `next(null, encodedContent)`
     - **type:** determines how to include a file, when serving
  - **`next`** function to be called when preprocessing is complete, should be called as `next(null, processedContent)` or `next(error)`

### Crazier stuff

As Karma is assembled by dependency injection, a plugin can ask for pretty much any Karma component and interact with it. 
There are a couple of plugins that do more interesting stuff like this, check out [karma-closure], [karma-intellij].

[karma-jasmine]: https://github.com/karma-runner/karma-jasmine
[karma-mocha]: https://github.com/karma-runner/karma-mocha
[karma-requirejs]: https://github.com/karma-runner/karma-requirejs
[karma-growl-reporter]: https://github.com/karma-runner/karma-growl-reporter
[karma-junit-reporter]: https://github.com/karma-runner/karma-junit-reporter
[karma-chrome-launcher]: https://github.com/karma-runner/karma-chrome-launcher
[karma-sauce-launcher]: https://github.com/karma-runner/karma-sauce-launcher
[karma-coffee-preprocessor]: https://github.com/karma-runner/karma-coffee-preprocessor
[karma-ng-html2js-preprocessor]: https://github.com/karma-runner/karma-ng-html2js-preprocessor
[karma-closure]: https://github.com/karma-runner/karma-closure
[karma-intellij]: https://github.com/karma-runner/karma-intellij
[node-di]: https://github.com/vojtajina/node-di
[karma-material-reporter]: https://github.com/ameerthehacker/karma-material-reporter
[plugins]: ../config/plugins.html
