* Karma
  * == tool / 💡== web server 💡/
    * 👀executes your source code | test code👀 
      * / EACH specified browser
        * 's results -- are displayed -- | CL
      * & watch ALL files / specified | Karma's configuration file
        * -- via sending a -- signal | testing server

* ⭐️steps⭐️
  * EACH connected browser -- loads -- source & test files | IFrame
  * Karma executes source code | test code
  * EACH connected browser -- reports the results -- back to the server

* ways to capture a browser
  * manually
    * == URL | Karma server is listening
      * by default, `http://localhost:9876/`
  * automatically
    * == [set a Karma browsers](../config/03-browsers.md) | start

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
      * Karma -- serves -- iframe + 'client.html' page /
        * generated -- based on the -- configuration
        * == test framework adapter + code to test + test code
      * if browser | 'client.html' -> connects -- via websockets, back to the -- server -> server -- over the websocket, instructs the client to -- execute tests
    * | browser loads this context page,
      * onload event handler connects the context page -- , via postMessage, to the -- client page
      * framework adapter responsible for
        * run the test,
        * reporting -- , by messaging through the client page, -- errors or success /
          * are forwarded -- , through the websocket, to the -- Karma server
          * are dispatched -- as -- 'browser' events /
            * listened by reporters / may 
              * print it,
              * save it | files,
              * forward -- to -- ANOTHER service

* COMMON stack
  * adapter + reporter
    * _Example:_ karma-jasmine & karma-jasmine-reporter

* Karma's workflow -- depend on -- variations & options
