const { hasUncaughtExceptionCaptureCallback } = require("process");
const Employee = require ("../lib/Employee")

it('able to set an employees name throught the contructor', () => {
        const testValue = "Employee Name"
        const employee = new Employee(testValue)
        expect(employee.name).toBe(testValue)
});

it('able to set an employees name throught the contructor', () => {
    const testValue = "Employee Name"
    const idValue = 1234
    const employee = new Employee(testValue, idValue)
    expect(employee.id).toBe(idValue)
});

it('able to set an employees name throught the contructor', () => {
    const testValue = "Employee Name"
    const idValue = 1234
    const emailValue = "email@email.com"
    const employee = new Employee(testValue, idValue, emailValue)
    expect(employee.email).toBe(emailValue)
});