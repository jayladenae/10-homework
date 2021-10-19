// required packages
const inquirer = require('inquirer');
const fs = require('fs');
// imported sub-classes
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// team array of objects
const teamMembers = [];

// validator function 
function validatorText(response) {
    let  validation = response && isNaN(response) ? true : 'This response is required and it needs to be text! Try again!'
    return validation;
};

function validatorNumber(response) {
    let validation = response && !isNaN(response) ? true : 'This response is required and it needs to be a number! Try again!'
    return validation;
}

function init() {
    inquirer

            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: "What is your team Manager's name?",
                    validate: validatorText
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: "What is your team Manager's employee ID?",
                    validate: validatorNumber
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: "What is your team Manager's email address?",
                    validate: validatorText
                },
                {
                    type:'input',
                    name: 'officeNumber',
                    message: "What is your team Manager's office number?",
                    validate: validatorNumber
                }
            ])

            .then((answers) => {
                console.log(answers);
                const {managerName, managerId, managerEmail, officeNumber} = answers;
                const manager = new Manager(managerName, managerId, managerEmail, officeNumber);

                console.log(manager)
                teamMembers.push(manager);

                menuPrompt();
            })
};

function menuPrompt () {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuOption',
                message: "What would you like to do next",
                choices: [
                    'Add an Engineer',
                    'Add an Intern',
                    'Finish building my team'
                ]
            }
        ])
        .then((selection) => {
            if(selection.menuOption === 'Add an Engineer') {
                addEngineer();
            } else if (selection.menuOption === 'Add an Intern'){
                addIntern();
            } else if (selection.menuOption === 'Finish building my team') {
                finishTeam();
            } else {
                console.log("somethings not right")
            }
        })
}

function addEngineer () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is your team Engineer's name?",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is your team Engineer's employee ID?",
                validate: validatorNumber
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is your team Engineer's email address?",
                validate: validatorText
            },
            {
                type:'input',
                name: 'engineerGithub',
                message: "What is your team Engineer's Github username?",
                validate: validatorText
            }
        ])

        .then((answers) => {
            console.log(answers);
            const {engineerName, engineerId, engineerEmail, engineerGithub} = answers;
            const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

            console.log(engineer)
            teamMembers.push(engineer);

            menuPrompt();
        })
};
    

function addIntern () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is your team Intern's name?",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is your team Intern's employee ID?",
                validate: validatorNumber
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is your team Intern's email address?",
                validate: validatorText
            },
            {
                type:'input',
                name: 'internSchool',
                message: "What school did your teams Intern attend?",
                validate: validatorText
            }
        ])

        .then((answers) => {
            console.log(answers);
            const {internName, internId, internEmail, internSchool} = answers;
            const intern = new Intern(internName, internId, internEmail, internSchool);

            console.log(intern)
            teamMembers.push(intern);

            menuPrompt();
        })
};
let htmlArray = [];
let name, id, email, extra, extraName, icon;

function finishTeam() {
    console.log("Congratulations, you have successfully created a webpage for your team!")
    for (let people of teamMembers) {
        let role = people.getRole();
        if (role === "Manager"){
             name = people.getName();
             id = people.getId();
             email = people.getEmail();
             extra = people.getOfficeNumber();
             extraName = "Office Number:";
             icon = '<i class="fas fa-mug-hot"></i>';
        } else if (role === "Intern") {
             name = people.getName();
             id = people.getId();
             email = people.getEmail();
             extra = people.getSchool();
             extraName = "School:"
             icon = '<i class="fas fa-user-graduate"></i>'
        }else if (role === "Engineer") {
             name = people.getName();
             id = people.getId();
             email = people.getEmail();
             extra = people.getGithub();
             extraName = "Github:";
             icon = '<i class="fas fa-glasses"></i>';
        }
        let obj = {
            role: role,
            name: name,
            id: id,
            email: email,
            extraName: extraName,
            extra: extra,
            icon: icon
        }
        htmlArray.push(obj);
    }
    generateHtml(htmlArray);
}



function generateHtml(htmlArray) {
    let htmlString = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="style" href="./dist/style.css">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/afc27ebdff.js" crossorigin="anonymous"></script>
    <title>Team</title>
</head>
<body>
<h1 style="color:white; text-align:center; background-color: black; font-size: 50px; padding: 25px;">
My Team
</h1>
<div id="team-cards" class="container d-flex flex-wrap justify-content-center align-items-center">
    `
    for(let employee of htmlArray) {
        if (employee.role === "Engineer") {
             employee.extra = `<a href="https://github.com/${employee.extra}" target="_blank"> ${employee.extra}</a>`
        } else {
             employee.extra = employee.extra;
        }
        htmlString = htmlString.concat(
            `<div id="card" class="card" style="width: 17.75rem;">
            <div class="card-body">
              <h5 class="card-title">${employee.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                ${employee.icon} ${employee.role}</i>  
                
            </h6>
            <div class="card" style="width: 15rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:${employee.id}</li>
                  <li class="list-group-item">Email: <a href ="mailto:${employee.email}"> ${employee.email}</a></li>
                  <li class="list-group-item">${employee.extraName} ${employee.extra}</li>
                </ul>
              </div>
            </div>
          </div>`
        )
    }

    htmlString = htmlString.concat (
        `</body>
        </html>`
    )

    writeHtml(htmlString);
}

function writeHtml(data) {
    fs.writeFile("theTeam.html", `${data}`, (err) => {
        err ? console.log(err) : console.log("It works!")
    })
}

init();