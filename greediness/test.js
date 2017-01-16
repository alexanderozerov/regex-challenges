import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('solution', 'utf8').split('\n')
    .filter(line => line.trim())
    .filter(line => !(line.includes('BEGIN') || line.includes('END')));
  const regexp = new RegExp(solution, 'g');

  it('should match', () => {
    const strings = ['(one) ($%@#$)', 'test (^,ehu-) ) (t)'];

    strings.forEach((string) => {
      expect(string).toMatch(regexp);
      const matches = string.match(regexp);
      expect(matches.length).toBe(2);
    });
  });

  it('should not match', () => {
    const strings = ['2383', '()', '() ('];

    strings.forEach((string) => {
      expect(string).not.toMatch(regexp);
    });
  });
});
