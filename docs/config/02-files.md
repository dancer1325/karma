## `files`
* see [here](01-configuration-file.md#files)
* array's item: `string | object`
  * `string`
    * == `{ pattern: "<string>" }`
  * object / following properties

### `pattern`
* **Type.** String
* **No Default.**
  * == ⚠️MANDATORY⚠️
* **Description.**
  * pattern -- for -- matching
    * [here](#pattern-matching-and-basepath)

### `type`
* **Type.** String
* **Default.** Will attempt to determine type based on file extension. If that fails, defaults to `js`.
* **Possible Values:**
  * `css` - Include using `<link rel="stylesheet">` tag.
  * `html` - Include using [HTML Imports](https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports). Note that this feature is obsolete and does not work in the modern browsers.
  * `js` - Include using `<script></script>` tag.
  * `module` - Include using `<script type="module"></script>` tag.
  * `dom` - Inline content of the file in the page. This can be used, for example, to test components combining HTML and JS.
* **Description.** The type determines the mechanism for including the file.

### `watched`
* **Type.** Boolean
* **Default.** `true`
* **Description.**  If `autoWatch` is `true` all files that have set `watched` to true will be watched for changes.

### `included`
* **Type.** Boolean
* **Default.** `true`
* **Description.** Should the files be included in the browser using
    `<script>` tag? Use `false` if you want to load them manually, eg.
    using [Require.js](../plus/requirejs.html).

    If a file is covered by multiple patterns with different `include` properties, the most specific pattern takes
    precedence over the other.

    The specificity of the pattern is defined as a six-tuple, where larger tuple implies lesser specificity:
    *(n<sub>glob parts</sub>, n<sub>glob star</sub>, n<sub>star</sub>, n<sub>ext glob</sub>, n<sub>range</sub>, n<sub>optional</sub>)*.
    Tuples are compared lexicographically.

    The *n<sub>glob parts</sub>* is the number of patterns after the bracket sections are expanded. E.g. the
    the pattern *{0...9}* will yield *n<sub>glob parts</sub>=10*. The rest of the tuple is decided as the least
    specific of each expanded pattern.

### `served`
* **Type.** Boolean
* **Default.** `true`
* **Description.** Should the files be served by Karma's webserver?

### `nocache`
* **Type.** Boolean
* **Default.** `false`
  * if `true` -> files are served -- from -- disk / Karma's webserver EACH request 

### `integrity`
* **Type.** String
* **Default.** `undefined`
* **Description.** Set the `integrity` HTML attribute value to the `<script>` or the `<link>` tag loading the resource that matches the given pattern if the pattern is an absolute URL.

## Pattern matching & `basePath`
- `basePath`
  - uses
    - resolve ALL relative patterns
  - if `basePath` == relative path -> relative patterns gets resolved | configuration file's  directory

- ALL patterns are resolved -- , via [glob](https://github.com/isaacs/node-glob), into -- files 
  - _Examples:_ use [minimatch] expressions: `test/unit/**/*.spec.js`

## Ordering
- The order of patterns determines the order in which files are included in the browser.
- Multiple files matching a single pattern are sorted alphabetically.
- Each file is included exactly once. If multiple patterns match the
  same file, it's included as if it only matched the first pattern.

## Preprocessor transformations
Depending on preprocessor configuration, be aware that files loaded may be transformed and no longer available in
their native format. For instance, if html2js preprocessor is enabled, the actual .html files are no longer
served - but rather available as `window.__html__['my.html']`. Read more about [preprocessors].



* _Example:_ DIFFERENT POSSIBLE OPTIONS
  ```javascript
  files: [
  
    // Detailed pattern to include a file. Similarly other options can be used
    { pattern: 'lib/angular.js', watched: false },
    // Prefer to have watched false for library files. No need to watch them for changes
  
    // simple pattern to load the needed testfiles
    // equal to {pattern: 'test/unit/*.spec.js', watched: true, served: true, included: true}
    'test/unit/*.spec.js',
  
    // this file gets served but will be ignored by the watcher
    // note if html2js preprocessor is active, reference as `window.__html__['compiled/index.html']`
    {pattern: 'compiled/index.html', watched: false},
  
    // this file only gets watched and is otherwise ignored
    {pattern: 'app/index.html', included: false, served: false},
  
    // file served on demand -- from -- disk & ignored -- by the -- watcher
    {pattern: 'compiled/app.js.map', included: false, served: true, watched: false, nocache: true}
  ],
  ```

## Loading files from another server

Pattern can also be an absolute URL. This allows including files which are not served by Karma.

Example:

```javascript
config.set({
  files: [
    'https://example.com/my-lib.js',
    { pattern: 'https://example.com/my-lib', type: 'js' }
  ]
})
```

Absolute URLs have some special rules comparing to the regular file paths:

- Globing is not support, so each URL must be specified as a separate pattern.
- Most of the regular options are not supported:
    - `watched` is always `false`
    - `included` is always `true`
    - `served` is always `false`
    - `nocache` is always `false`

## Loading Assets
By default all assets are served at `http://localhost:[PORT]/base/`

Example for loading images

```javascript
files: [
  {pattern: 'test/images/*.jpg', watched: false, included: false, served: true, nocache: false}
],
```

The pattern is a glob which matches the specified image assets. Watched and included are not necessary as images are not tests. However, they will need to be served to the browser.

In this case an image would be accessed at `http://localhost:[PORT]/base/test/images/[MY IMAGE].jpg`

Notice the **base** in the URL, it is a reference to your **basePath**. You do not need to replace or provide your own **base**.

In addition, you can use a proxy

```javascript
proxies: {
  "/img/": "http://localhost:8080/base/test/images/"
},
```

Now you can fetch images in `test/images` at `http://localhost:8080/img/[MY IMAGE].jpg`

Change **8080** to the port you use

You can also use proxies without specifying the protocol, hostname, and port

```javascript
proxies: {
  "/img/": "/base/test/images/"
},
```

## Webserver features

* [Range requests][].
* In-memory caching of files.
* Watching for updates in the files.
* Proxies to alter file paths.
* Support for custom middlewares (the `middleware` configuration option).


[glob]: https://github.com/isaacs/node-glob
[preprocessors]: preprocessors.html
[minimatch]: https://github.com/isaacs/minimatch
[Range requests]: https://en.wikipedia.org/wiki/Byte_serving
