const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Tyler', 45, 'tyler@tyler.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})