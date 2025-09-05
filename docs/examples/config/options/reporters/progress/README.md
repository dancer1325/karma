* goal
  * Karma configuration file's `reporters`: `progress`

# How has it been created?
* `npm init -y`
* `npm install karma --save-dev`
* `./node_modules/karma/bin/karma init` & prompt selecting ALL default
  * by default, `reporters: ['progress']` 

# how to run?
* `./node_modules/karma/bin/karma start`
  * Problems:
    * Problem1: Why test results are NOT displayed | Karma server?
      * Attempt1: `./node_modules/karma/bin/karma run`
      * Reason: 🧠`progress` ONLY display results | terminal🧠
