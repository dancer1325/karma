* goal
  * Karma configuration file's `client.clearContext`: `false`

# How has it been created?
* `npm init -y`
* `npm install karma --save-dev`
* `./node_modules/karma/bin/karma init` & prompt selecting ALL default
* | "karma.conf.js", add
  ```js
  client: {
    clearContext: true
  }
  ```

# how to run?
* `./node_modules/karma/bin/karma start`
  * display TEMPORARY (SHORTLY) the output test execution
