* goal
  * how to create a Karma's configuration

* Karma's configuration
  * allows
    * test -- knowing your project -- properly
  * see 
    * [configuration file docs]

## How to create?

* `karma init`
    ```bash
    $ karma init my.conf.js
    
    Which testing framework do you want to use?
    Press tab to list possible options. Enter to move to the next question.
    > jasmine
    
    Do you want to use Require.js?
    This will add Require.js plugin.
    Press tab to list possible options. Enter to move to the next question.
    > no
    
    Do you want to capture a browser automatically?
    Press tab to list possible options. Enter empty string to move to the next question.
    > Chrome
    > Firefox
    >
    
    What is the location of your source and test files?
    You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
    Press Enter to move to the next question.
    > *.js
    > test/**/*.js
    >
    
    Should any of the files included by the previous patterns be excluded?
    You can use glob patterns, eg. "**/*.swp".
    Press Enter to move to the next question.
    >
    
    Do you want Karma to watch all the files and run the tests on change?
    Press tab to list possible options.
    > yes
    
    Config file generated at "/Users/vojta/Code/karma/my.conf.js".
    ```
  * `karma init someFileName.coffee` -> generate Karma's configuration | CoffeeScript
    * _Example:_ `karma init karma.conf.coffee`  

## How to start Karma?

* `karma start`
  * by default, look for | current directory,
    * `karma.conf.js` 
    * `karma.conf.coffee`
  * `karma start pathSpecifyingKarmaConfigurationFile` 

    ```bash
    # Start Karma using your configuration:
    $ karma start my.conf.js
    ```

## CL arguments

* `karma someCommand --help`
  * _Example:_ 
    ```bash
    karma start my.conf.js --log-level debug --single-run
    ```

## Integrating with Grunt/Gulp

* see
  * [grunt-karma]
  * [gulp-karma]


[configuration file docs]: ../config/configuration-file.html
[Grunt]: https://gruntjs.com/
[grunt-karma]: https://github.com/karma-runner/grunt-karma
[Gulp]: https://gulpjs.com
[gulp-karma]: https://github.com/karma-runner/gulp-karma
