const Manager = require("../lib/Manager");

it('able to set an managers name throught the contructor or something like that ', () => {
    const testValue = "manager Name"
    const manager = new Manager(testValue)
    expect(manager.name).toBe(testValue)
});

it('able to set an managers name throught the contructor or something like that ', () => {
const testValue = "manager Name"
const idValue = 1234
const manager = new Manager(testValue, idValue)
expect(manager.id).toBe(idValue)
});

it('able to set an managers name throught the contructor or something like that ', () => {
const testValue = "manager Name"
const idValue = 1234
const emailValue = "email@email.com"
const manager = new Manager(testValue, idValue, emailValue)
expect(manager.email).toBe(emailValue)
});

it('able to set an managers name throught the contructor or something like that ', () => {
const testValue = "manager Name"
const idValue = 1234
const emailValue = "email@email.com"
const officeValue = "5678"
const manager = new Manager(testValue, idValue, emailValue, officeValue)
expect(manager.officeNumber).toBe(officeValue)
    });