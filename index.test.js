import assert from 'node:assert';
import { test } from 'node:test';

test('test', async test => {
  fetch = test.mock.fn((/** @type {RequestInfo} */ input) => {
    assert.equal(input, 'https://example.com');
    return {
      text: () => 'Hello World',
    };
  });

  console.log = test.mock.fn((/** @type {string} */ text) => {
    assert.equal(text, 'Hello World');
  });

  await import('./index.js');

  assert.equal(fetch.mock.calls.length, 1);
  assert.equal(console.log.mock.calls.length, 1);
});
