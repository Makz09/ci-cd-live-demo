const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('./index.html', 'utf8');

assert.strictEqual(
  html.includes('Continuous Deployment Success!'),
  true,
  'Error: Required heading missing from index.html'
);

console.log('✅ All automated tests passed successfully!');
