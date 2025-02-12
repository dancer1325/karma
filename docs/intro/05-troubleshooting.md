---
pageTitle: Troubleshooting
menuTitle: Troubleshooting
---

### `npm audit` vulnerabilities

* if you want a fix -> open a issue
* TODO:
We get lots of these reports, from multiple automated services, from other projects, and from users. 
The vast majority are minor: please open a pull request if you want a fix. 
We only take direct action to fix serious issues that affect online users.

### How Do I Debug a karma issue?

* read the `debug log`
* use the `browsers devtools`

#### if you want to investigate server-side issues -> use `--log-level debug`

* _Example of server-side issues:_ configuration issues
* `DEBUG` log
  * -> copy of the final 'config'
    * plugins -- can alter the -- config
    * settings / you applied -- do NOT give the -- expected result
  * == core `karma` lines + plugins lines 
    * identify it -- by the -- logging prefix

#### if you want to investigate browser-side issues -> use `--no-single-run`

* _Example of browser-side issues:_ global errors | test files
* -> server
  * prints a URL
  * wait  
* steps
  * open the URL | browser
  * click DEBUG link | upper right corner 
 
#### Is your issue -- related to -- ANOTHER tool?
* TODO: Issues with Angular setups are probably better debugged by consulting with other Angular users.  
Issues with coverage are probably related to your config, the compiler for coverage instrumentation, or possibly karma-coverage.

#### Use the source!
`karma` is all JavaScript code: perhaps you can debug your issue by adding logging?

### I'm getting an error during the installation related to the ```ws``` module, how can I solve it?
This is a common Windows [issue](https://github.com/einaros/ws/issues/178), the compilation of the native [ws](https://www.npmjs.com/package/ws) module fails. Anyways, ```ws``` has a fallback JS implementation which npm should take care using it. 
All you need to do is make sure that you're using an up-to-date version of npm. 
To do that you can:

#### Update npm
```$ npm install -g npm```

or

#### Do a fresh NodeJS install
If you have issues to update npm, you can just go to the [NodeJS](https://nodejs.org/) download the current version. 
It will come with the latest npm version.


### The browser just does not start. What's going on?
It's more likely Karma can't find the location of the browser binary (the execution file). 
You can fix this by setting the appropriate environment variable with the correct path (Google Chrome, for instance, uses the `CHROME_BIN` environment variable).
Check out [browsers] for more information.


### I'm getting a weird error from the browser, how can I debug it?
Go to the captured browser and click the "DEBUG" button (or open `http://localhost:9876/debug.html`)
and use the web inspector to see what's going on. (You may need to refresh the debug.html page for it to kick in once
the web inspector is open.)


### I'm getting a syntax error from a HTML file. It looks like the preprocessor isn't working.
The patterns in the `preprocessors` configuration setting are resolved via the `basePath` setting.
See preprocessors for more information. You can also turn on debug logging (use `--log-level debug` when starting Karma)
and Karma will display which files are preprocessed.


### I'm getting a `npm ERR! peerinvalid Peer` error. How can I fix that?
Try to remove `karma` and `karma-*` modules from your `node_modules` first (for instance `rm -rf /usr/local/lib/node_modules/karma-*`), then install Karma again.


### My tests are running really slow. What's going on?
Make sure the Karma's tab is active. Browsers give inactive tabs only minimum CPU.

Note: If you can't find the solution for your issue here you can also ask for help in the [mailing-list](https://groups.google.com/d/forum/karma-users) or [Stack Overflow](https://stackoverflow.com/questions/tagged/karma-runner).

### I'm really stuck. I tried every thing!
Because of the complexity of test setups, we rarely work to fix bugs without steps to reproduce. 
The best approach is to create a github project that installs all the components and reproduces the bug.

