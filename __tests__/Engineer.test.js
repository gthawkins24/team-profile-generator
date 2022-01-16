const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Tyler', 45, 'tyler@tyler.com', 'tyler24');

    expect(engineer.github).toEqual(expect.any(String));
});