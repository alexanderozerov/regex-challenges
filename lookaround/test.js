import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('solution', 'utf8').split('\n')
    .filter(line => line.trim())
    .filter(line => !(line.includes('BEGIN') || line.includes('END')));
  const regexp = new RegExp(solution, 'g');

  it('should match', () => {
    const strings = ['80:8080, 80:!@#$'];

    strings.forEach((string) => {
      expect(string).toMatch(regexp);
      const matches = string.match(regexp);
      expect(matches[0]).toBe('80');
    });
  });

  it('should not match', () => {
    const strings = ['80:', '80', '80:d123f'];

    strings.forEach((string) => {
      expect(string).not.toMatch(regexp);
    });
  });
});
