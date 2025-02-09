---
pageTitle: Frequently Asked Questions
menuTitle: FAQ
---

### Can I use Karma + testing framework X?
* Yes
* | MOST of the common testing frameworks (Jasmine, Mocha, QUnit)
  * there are plugins

### Can I use Karma -- for -- E2E testing?
* Karma
  * 's primary goal == unit testing 
* | AngularJS app
  * 's unit testing
    * use Karma + [karma-ng-scenario] plugin
  * 's E2E testing
    * use [Protractor] 

### Can I use Karma | Continuous Integration server ?
* se
  * [Jenkins],
  * [Semaphore],
  * [TeamCity]
  * [Travis]

### Which version of Karma should I use?
* latest stable version
  * == `npm install karma`

### Which version of Node.js does Karma run with?
* | ALL LTS versions of Node.js
  * see [Node.js Release Working Group](https://github.com/nodejs/Release/blob/master/README.md)
* | OLDER versions of karma,
  * older versions of Node.js / NOT maintained or updated

[mailing list]: https://groups.google.com/d/forum/karma-users
[karma-ng-scenario]: https://github.com/karma-runner/karma-ng-scenario
[Protractor]: https://github.com/angular/protractor
[Jenkins]: ../plus/jenkins.html
[Semaphore]: ../plus/semaphore.html
[TeamCity]: ../plus/teamcity.html
[Travis]: ../plus/travis.html
[versioning]: ../about/versioning.html
[browsers]: ../config/browsers.html
