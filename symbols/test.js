import fs from 'fs';
import assert from 'assert';

describe('regexp', () => {
  const solution = fs.readFileSync('solution', 'utf8').split('\n')
  .filter(line => line.trim())
  .filter(line => !(line.includes('BEGIN') || line.includes('END')));

  const regexp = new RegExp(solution);

  it('should match', () => {
    const strings = ['ruby1.9', 'ruby1.8'];

    strings.forEach(string => expect(string).toMatch(regexp));
  });

  it('should not match', () => {
    const strings = ['ruby1a9', 'ruby2.5', 'ruby1111', 'ruby10'];

    strings.forEach(string => expect(string).not.toMatch(regexp));
  });
});
