const assert = require('assert');

const result = 2 + 3;

// assert.strictEqual(result, 5, 'Math test success!');
assert.strictEqual(result, 6, 'Math test failed!');

console.log('✅ All CI checks passed!');
