import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from './greet.js';

test('greet returns greeting for given name', () => {
  assert.equal(greet('World'), 'Hello, World!');
});
