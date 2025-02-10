* Karma
  * 💡runs | ALL [Node.js] LTS releases 💡
  * 👀-- AVAILABLE as -- [npm] package 👀

## Requirements

* install Node.js
  * | Mac or Linux,
    * recommended to use [NVM](https://github.com/creationix/nvm)
  * | Windows,
    * [download Node.js | official site](https://nodejs.org/) or
    * use [NVM PowerShell Module](https://www.powershellgallery.com/packages/nvm)

## Installing Karma & plugins

* 

    ```bash
    # Install Karma:
    $ npm install karma --save-dev
    
    # Install Karma's plugins / needed by your project
    $ npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev
    ```
  * install 
    * Karma
    * ALL Karma's plugins / needed by your project

## How to run?

* |
  * Linux or Mac,
      ```bash
      $ ./node_modules/karma/bin/karma start
      ```
  * Windows,
    ```bash
    # install Karma CLI globally
    $ npm install -g karma-cli
    $ karma-cli start
    ```
  
[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/package/karma
[NVM]: https://github.com/creationix/nvm
[FAQ]: ./faq.html
