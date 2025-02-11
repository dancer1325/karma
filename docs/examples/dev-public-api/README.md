# How has it been created?
* `npm init -y`
* `npm install karma --save-dev`
* `npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev`
  * install Karma's plugins 

# How to run a specific file?
* `node fileName.js`

## `node constructorNewBehavior.js`
* Problems:
  * Problem1: "Uncaught ReferenceError: require is not defined at http://localhost:9877/base/constructorDeprecatedBehavior.js?" Why calls another file?
    * Solution: TODO: 