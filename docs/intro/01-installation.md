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

## Installing Karma and plugins

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

* 

    ```bash
    # Run Karma:
    $ ./node_modules/karma/bin/karma start
    ```
  * == use Karma CLI

## CLI

* |
  * Linux or Mac,
    ```
    ./node_modules/karma/bin/karma start
    ```
  * Windows 

      ```bash
      $ npm install -g karma-cli
      ```

[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/package/karma
[NVM]: https://github.com/creationix/nvm
[FAQ]: ./faq.html
