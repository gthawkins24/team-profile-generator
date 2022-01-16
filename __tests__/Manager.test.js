const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Tyler', 45, 'tyler@tyler.com', 4405);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});