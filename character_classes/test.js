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
    const strings = ['23/A', '83/#', '92/?', '92/8'];

    strings.forEach((string) => {
      assert.match(string, regexp);
    });
  });

  it('should not match', () => {
    const strings = ['23/a', '53/e', 'd3/3', '3d/2', '2383'];

    strings.forEach((string) => {
      assert.notMatch(string, regexp);
    });
  });
});
