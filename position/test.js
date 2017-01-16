import fs from 'fs';
import chai from 'chai';
import { describe, it } from 'mocha';
const assert = chai.assert;

describe('regexp', () => {
  const solution = fs.readFileSync('solution', 'utf8').split('\n')
    .filter(line => line.trim())
    .filter(line => !(line.includes('BEGIN') || line.includes('END')));
  const regexp = new RegExp(solution);

  it('should match', () => {
    const strings = ['support@hexlet.io'];

    strings.forEach((string) => {
      assert.match(string, regexp);
    });
  });

  it('should not match', () => {
    const strings = [
      ' support@hexlet.io', 'support@hexlet.io ', 'support@hexletdio',
      '9support@hexlet.io', 'support@hexlet.ioo', 'support@hexlet9io',
    ];

    strings.forEach((string) => {
      assert.notMatch(string, regexp);
    });
  });
});
