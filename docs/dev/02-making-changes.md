<!---
TODO:
- add more info about updating PR
  - rebasing/squashing changes
  - making sure CI is green
- how to run tests on sauce labs
- how to set up plugins
-->

* goal
  * how to 
    * set up a Karma workspace
    * send a good PR

## Setting up the Workspace

* `$ npm install`
  * install for development

## Testing and Building
* run the tests
  ```bash
  $ npm test
  
  # run test suits INDIVIDUALLY
  $ npm run test:unit
  $ npm run test:e2e
  $ npm run test:client
  ```

* lint the code
  ```bash
  $ npm run lint
  
  # apply auto-fixes | possible
  $ npm run lint:fix
  ```

* build the client code 
  ```bash
  $ npm run build
  # or use the watch mode
  $ npm run build:watch
  ```

## Changing the Code
* TODO:Checkout a new branch and name it accordingly to what you intend to do:
- Features get the prefix `feature-`.
- Bug fixes get the prefix `fix-`.
- Improvements to the documentation get the prefix `docs-`.
```bash
$ git checkout -b <branch_name>
```

Open your favorite editor, make some changes, run the tests, change the code, run the tests,
change the code, run the tests, etc.

- Please follow http://nodeguide.com/style.html (with exception of 100 characters per line).


## Sending a Pull Request

- Commit your changes (please follow [commit message conventions]):
  ```bash
  $ git commit -m "..."
  ```
- Verify that the last commit follows the conventions:
  ```bash
  $ npm run commit:check
  ```
- Push to your GitHub repo:
  ```bash
  $ git push origin <branch_name>
  ```
- Go to the GitHub page and click "Open a Pull request".
- Write a good description of the change.

After sending a pull request, other developers will review and discuss your change.
Please address all the comments. Once everything is all right, one of the maintainers will merge
your changes in.

## Additional Resources

- [Mailing List](https://groups.google.com/forum/#!forum/karma-users)
- [Issue tracker](https://github.com/karma-runner/karma/issues)
- [General GitHub documentation](https://docs.github.com/)
- [GitHub pull request documentation](https://docs.github.com/github/collaborating-with-issues-and-pull-requests/about-pull-requests#about-pull-requests)

[commit message conventions]: git-commit-msg.html
[simple click-through form]: https://code.google.com/legal/individual-cla-v1.0.html
[the form]: https://code.google.com/legal/corporate-cla-v1.0.html
[Fork the repository]: https://github.com/karma-runner/karma/fork
