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

        function createManagerCard() {
          let managerCard = "";
          for (let i = 0; i < managerArray.length; i++) {
            const data = managerArray[i];
            managerCard += `
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">${data.getRole()} </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${data.id}</li> 
              <li class="list-group-item">${data.getOfficeNumber()}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">${data.email}</a>
            </div>
            `
          }
        return managerCard;
        }
        
        function createInternCard() {
          let internCard = "";
          for (let i = 0; i < internArray.length; i++) {
            const data = internArray[i];
            internCard += `
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">${data.getRole()} </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${data.id}</li> 
              <li class="list-group-item">${data.getSchool()}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">${data.email}</a>
          </div>
            `
          }
        return internCard;
        }
        
        function createEngineerCard() {
          let engineerCard = "";
          for (let i = 0; i < engineerArray.length; i++) {
            const data = engineerArray[i];
            engineerCard += `
            
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">${data.getRole()} </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${data.id}</li> 
              <li class="list-group-item">${data.getGithub()}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">${data.email}</a>
            </div>
          
            `
          }
        return engineerCard;
        }
        
        function createTitleCard(){
          for (let i = 0; i < titleArray.length; i++) {
            const element = titleArray[i];
        
            return element
            
          }
        }
        
        
        function generateHTML() {
        
          fs.writeFile ("./index.html",  `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>${createTitleCard()}</title>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
          </head>
          <body>
              <header class="p-3 mb-2 bg-primary text-white text-xl-center">${createTitleCard()}</header>
              <div class="card d-flex justify-content-around" style="width: 18rem;">
              ${createManagerCard()}
              ${createInternCard()}
              ${createEngineerCard()}      
              </div>
          </body>
          </html>` , err => {
            if(err) throw err
        
          })
          }