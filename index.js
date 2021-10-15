const Intern = require ("./main/intern")
const Engineer = require ("./main/Engineer")
const Manager = require ("./main/Manager")

const inquirer = require('inquirer');
const fs = require('fs');


const managerArray = []
const engineerArray = []
const internArray = []
const titleArray =[]
getTitleInfo();


function getTitleInfo(){
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Please name the project/team',
        name: 'title',
        validate: (value)=>{if(value){return true} else {return 'We need a title name'}}
        
      },
    ]).then (response => {
     titleArray.push(response.title)
     getEmployeeInfo();
    })
  }
function addEmployee(){

  inquirer
  .prompt([
          {
     type: 'list',
     message: 'Would you like to add another person?',
     name: 'another',
     choices: ["Yes", "No"]
    }
  ])
  .then (response => {
    if(response.another === "Yes"){
      getEmployeeInfo();
    } else {
      generateHTML();}
  })
}

function getEmployeeInfo(){
inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter the team member name',
        name: 'name',
      },
      {
        type: 'list',
        message: 'What is their position?',
        choices: ["Manager", "Engineer", "Intern"],
        name: 'position',
      },
      {
        type: 'input',
        message: 'What\'s their ID?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What\'s their email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What\'s the manager\'s office number?',
        name: 'officeNumber',
        when: (answers) => answers.position === 'Manager'
      },
      {
        type: 'input',
        message: 'What\'s the engineer\'s github account name?',
        name: 'github',
        when: (answers) => answers.position === 'Engineer'
      },
      {
        type: 'input',
        message: 'What\'s the intern\'s school?',
        name: 'school',
        when: (answers) => answers.position === 'Intern'
      },

    ]).then ((response) =>{

        if(response.position === "Manager"){
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
            managerArray.push(manager)
        } else if(response.position === "Engineer"){
          const engineer = new Engineer(response.name, response.id, response.email, response.github) 
          engineerArray.push(engineer)
        }else {
          const intern = new Intern(response.name, response.id, response.email, response.school) 
          internArray.push(intern)
        }
  addEmployee();
          });
        }