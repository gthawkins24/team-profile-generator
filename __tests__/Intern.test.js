const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Tyler', 66, 'tyler@tyler.com', 'OSU');

    expect(intern.school).toEqual(expect.any(String));
})