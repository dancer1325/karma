* Karma
  * == tool / spawns a web server /
    * executes source code | test code 
      * / EACH connected browser
        * 's results -- are displayed -- | CL
      * & watch ALL files / specified | Karma's configuration file
        * -- via sending a -- signal | testing server

* steps
  * EACH connected browser -- loads the -- source files | IFrame
  * Karma executes source code | test code
  * EACH connected browser -- reports the results -- back to the server


* ways to capture a browser
  * manually -- by visiting the -- URL | Karma server is listening (by default, `http://localhost:9876/`)
  * automatically -- by setting -- Karma browsers | start
    * see [browsers](../config/03-browsers.md)

## Karma's workflow

* | AFTER Karma starting up, 
  * Karma 
    * loads 
      * plugins
        * -> test reporters -- register for -- 'browser' events / ready for test results
      * configuration file,
    * starts its local web server / listens for connections
      * -> ANY browser ALREADY waiting | server's websockets -> will reconnect IMMEDIATELY 
    * launches >= 0 browsers / their start page == Karma server URL
    * | AFTER browsers connect,
      * Karma -- serves a -- 'client.html' page 
      * if browser | 'client.html' -> connects -- via websockets, back to the -- server -> server -- over the websocket, instructs the client to -- execute tests  
* TODO: The client page opens an iframe with a 'context.html' page from the server.
The server generates this context.html page using the configuration.
This page includes the test framework adapter, the code to be tested, and the test code.

When the browser loads this context page, the onload event handler connects the context page to the client page via postMessage. 
The framework adapter is in charge at this point: it runs the test, reporting errors or success by messaging through the client page.

Messages sent to the client page are forwarded through the websocket to the Karma server. 
The server re-dispatches these messages as 'browser' events. 
The reporters listening to 'browser' events get the data; they may print it, save it to files, or forward the data to another service.
Since the data is sent by the test framework adapter to the reporter, adapters and reporters almost always come in pairs, like karma-jasmine and karma-jasmine-reporter.  
The detailed content of test-result data is of no concern to other parts of karma: only the reporter needs to know its format.

* Karma's workflow -- depend on -- variations & options

[browsers]: ../config/browsers.html
