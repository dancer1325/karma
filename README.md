# Karma

* := simple tool /
  * allows
    * 👀execute JavaScript code | MULTIPLE _real_ browsers 👀
      * [supported browsers](/docs/config/03-browsers.md)
  * 's goal
    * test-driven development
      * easy,
      * fast,
      * fun
  * !=
    * testing framework
    * assertion library

## ⚠️Karma is deprecated & NOT accept NEW features or GENERAL bug fixes ⚠️

* Reason: 🧠
  * SINCE Karma's creation ([10+ years](https://testing.googleblog.com/2012/11/testacular-spectacular-test-runner-for.html)),  
    * web testing space has evolved
      * NEW patterns & tools
      * NEW test runners / MORE performant alternatives
  * | NOW,
    * Karma NO provides clear unique value 🧠

* uses of Karma
  * 👀Angular ecosystem 👀
    * Angular -- is adding (see [Angular blog](https://blog.angular.io/moving-angular-cli-to-jest-and-web-test-runner-ef85ef69ceca)) -- 
      * [Jest](https://jestjs.io/)
      * [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/)
    * | [NOW, Angular CLI's Web Test Runner supported is stable +1 year]
      * ⚠️ONLY CRITICAL security issues fixed ⚠️ 
  * outside Angular
    * migrate to alternatives
      * browser-based 
        * [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/)
        * [`jasmine-browser-runner`](https://github.com/jasmine/jasmine-browser-runner) 
      * Node-based
        * [Jest](https://jestjs.io/)
        * [Vitest](https://vitest.dev/) 

## Documentation

* [docs](/docs)

## Communication -- Help and Support

* Quick questions:
[![Gitter Chat](https://img.shields.io/badge/GITTER-join%20chat-green.svg?style=flat-square)](https://gitter.im/karma-runner/karma)
* Longer questions: [Mailing List]
* Bug reports [Issue Tracker]
* Everything less than 140 characters: [@JsKarma] on Twitter

## Use cases

* test code | 
  * *real* browsers
  * MULTIPLE browsers (desktop, mobile, tablets, etc.).
  * locally
  * CI server
  * EVERY save
* generate -- via [Istanbul] -- coverage reports
* | your source files
  * use [RequireJS] 

## How does it work?

* Karma 
  * -- launches an -- HTTP server
  * -- generates the -- test runner HTML file / 
    * -- used via -- dedicated testing framework's plugins
      * [Jasmine]
      * [Mocha]
      * [QUnit]
      * [many others](https://www.npmjs.com/search?q=keywords:karma-adapter)

## Origin

* | [AngularJS] development
  * originally, [JSTD] used
    * MANY problems
* Karma
  * == own test runner / 
  * 's idea
    * == JSTD's idea
    * execute JavaScript tests 
      * stable
      * fast
  * supported on
    * [Socket.io]
    * [Node.js]
  * originates -- from a -- [university thesis]

## License
* [MIT License](./LICENSE)

[AngularJS]: https://angularjs.org/
[JSTD]: https://code.google.com/p/js-test-driver/
[Socket.io]: https://socket.io/
[Node.js]: https://nodejs.org/
[Jasmine]: https://github.com/karma-runner/karma-jasmine
[Mocha]: https://github.com/karma-runner/karma-mocha
[QUnit]: https://github.com/karma-runner/karma-qunit
[here]: https://www.youtube.com/watch?v=MVw8N3hTfCI
[Mailing List]: https://groups.google.com/forum/#!forum/karma-users
[Issue Tracker]: https://github.com/karma-runner/karma/issues
[@JsKarma]: https://twitter.com/JsKarma
[RequireJS]: https://requirejs.org/
[Istanbul]: https://github.com/gotwarlost/istanbul
[university thesis]: https://github.com/karma-runner/karma/raw/master/thesis.pdf
