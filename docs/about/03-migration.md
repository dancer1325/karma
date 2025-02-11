---
pageTitle: Migration from v0.10
---

* ways to migrate
  * migrate ALL projects
  * EXISTING projects / use an older version + NEW projects / use the latest

* steps
  * `npm install karma --save-dev`
    * install the latest version of Karma & update your project's `package.json`
  * install MISSING plugins
    * Reason: 🧠Karma does NOT ship ANYMORE with "default" plugins 🧠
      * "default" plugins / were removed
        * karma-jasmine
        * karma-requirejs
        * karma-coffee-preprocessor
        * karma-html2js-preprocessor
        * karma-chrome-launcher
        * karma-firefox-launcher
        * karma-phantomjs-launcher
        * karma-script-launcher
      * | EXISTING projects,
      * NO problem
        * Reason: 🧠running `npm install karma --save-dev` -> they will be added 🧠
    * | NEW projects,
      * specify the plugins to install
  * `npm install -g karma-cli`
    * == install CLI 
    * Reason: 🧠Karma does NOT put it | YOUR system PATH 🧠

* `autoWatch`
  * `true`, by default
  * if you do NOT want -> set it to `false`

* troubleshooting
  * if you face with an "unsatisfied peer dependency" error -> 
    * `rm -rf ./node_modules`
    * `npm clean install`
