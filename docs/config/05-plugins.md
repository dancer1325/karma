* Karma's plugins
  * allows
    * extending Karma
  * _Examples:_ 👀Karma's built-in preprocessors, reporters, browser launchers and frameworks👀
    * [here](https://www.npmjs.com/search?q=keywords:karma-plugin)

## Installing Plugins

* recommended way
* `npm install karma-<plugin name> --save-dev`
* _Example:_
    ```json
    {
      "devDependencies": {
        "karma": "~0.10",
        "karma-mocha": "~0.0.1",
        "karma-growl-reporter": "~0.0.1",
        "karma-firefox-launcher": "~0.0.1"
      }
    }
    ```

## Loading Plugins

* Karma load plugins
  * ⚠️!= activate the plugin⚠️
  * by default,
    * 💡ALL sibling npm packages / 's name's start with `karma-*`💡
  * if you want to override -> specify Karma's configuration's `plugins` 

    ```javascript
    config.set({
      plugins: [
        // Load a plugin you installed from npm.
        require('karma-jasmine'),
    
        // Load a plugin from the file in your project.
        require('./my-custom-plugin'),
      
        // Define a plugin inline.
        { 'framework:xyz': ['factory', factoryFn] },
    
        // Specify a module name or path which Karma will require() and load its 
        // default export as a plugin.
        'karma-chrome-launcher',
        './my-fancy-plugin'
      ]
    })
    ```

## Activating Plugins

* ways to activate
  * ⚠️-- depend on the -- plugin type⚠️
  * add a plugin name | `frameworks`, `reporters`, `preprocessors`, `middleware` OR `browsers`

* see
  * corresponding plugin documentation OR
  * [Developing plugins](../dev/05-plugins.md) 
