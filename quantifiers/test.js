import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('solution', 'utf8').split('\n')
    .filter(line => line.trim())
    .filter(line => !(line.includes('BEGIN') || line.includes('END')));
  const regexp = new RegExp(solution);

  it('should match', () => {
    const strings = [
      'suPport@hExlet.io',
      'in9Fo@hexlet.io',
      'in_fo@goOgle.com',
    ];

    strings.forEach((string) => {
      expect(string).toMatch(regexp);
    });
  });

  it('should not match', () => {
    const strings = [
      'support@hexletio',
      '^%@hexlet.io',
      'info@he.xlet.io',
      'info@he.io',
      '!info@hexlet.io',
      'info@hexlet.i',
      'info@hexlet.ioioio',
      'info@1hexlet.io',
      'info@hexlet.i3'];

    strings.forEach((string) => {
      expect(string).not.toMatch(regexp);
    });
  });
});
