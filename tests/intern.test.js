const Intern = require("../lib/Intern");

it('able to set an interns name throught the contructor ', () => {
    const testValue = "intern Name"
    const intern = new Intern(testValue)
    expect(intern.name).toBe(testValue)
});

it('able to set an interns name throught the contructor ', () => {
    const testValue = "intern Name"
    const idValue = 1234
    const intern = new Intern(testValue, idValue)
    expect(intern.id).toBe(idValue)
});

it('able to set an interns name throught the contructor ', () => {
    const testValue = "intern Name"
    const idValue = 1234
    const emailValue = "email@email.com"
    const intern = new Intern(testValue, idValue, emailValue)
    expect(intern.email).toBe(emailValue)
});

it('able to set an interns name throught the contructor ', () => {
    const testValue = "intern Name"
    const idValue = 1234
    const emailValue = "email@email.com"
    const schoolValue = "Ringling Bros. and Barnum & Bailey Clown College"
    const intern = new Intern(testValue, idValue, emailValue, schoolValue)
    expect(intern.school).toBe(schoolValue)
});
