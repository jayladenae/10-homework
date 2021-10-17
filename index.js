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
                    'Add Engineer',
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
            const {internName, internId, internEmail, internGithub} = answers;
            const intern = new Intern(internName, internId, internEmail, internGithub);

            console.log(intern)
            teamMembers.push(intern);

            menuPrompt();
        })
};

function finishTeam() {
    console.log("we're Finished!")
    for (let people of teamMembers) {
        let role = people.getRole()
    }
}

init();