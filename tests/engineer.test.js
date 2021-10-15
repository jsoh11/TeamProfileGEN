const Engineer = require("../lib/Engineer");

it('able to set an engineers name throught the contructor ', () => {
    const testValue = "engineer Name"
    const engineer = new Engineer(testValue)
    expect(engineer.name).toBe(testValue)
});

it('able to set an engineers name throught the contructor ', () => {
const testValue = "engineer Name"
const idValue = 1234
const engineer = new Engineer(testValue, idValue)
expect(engineer.id).toBe(idValue)
});

it('able to set an engineers name throught the contructor ', () => {
const testValue = "engineer Name"
const idValue = 1234
const emailValue = "email@email.com"
const engineer = new Engineer(testValue, idValue, emailValue)
expect(engineer.email).toBe(emailValue)
});

it('able to set an engineers name throught the contructor ', () => {
const testValue = "engineer Name"
const idValue = 1234
const emailValue = "email@email.com"
const gitValue = "https://github.com/user"
const engineer = new Engineer(testValue, idValue, emailValue, gitValue)
expect(engineer.github).toBe(gitValue)
});