# Node Test Runner Mock `fetch`

This repository hosts a sample of how to use the Node built-in test runner to
mock calls to the `fetch` and `console.log` functions.

The main script is in `index.js` run using `node .` and it is not adapted for
testability specifically in any way, it is just straight script-type code.

The test is in `index.test.js` run using `node --test` and it mocks the global
`fetch` as well as `console.log` functions and asserts the arguments they are
expected to be called with as well as provides the mock implementation.
