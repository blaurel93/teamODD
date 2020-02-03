///////////////////////////////////////////  JAVASCRIPT REQS  ///////////////////////////////////////////
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const inquirer = require("inquirer");
///////////////////////////////////////////  JAVASCRIPT REQS  ///////////////////////////////////////////
///////////////////////////////////////////  HTML REQS        ///////////////////////////////////////////
///////////////////////////////////////////  HTML REQS        ///////////////////////////////////////////

//////////////// ALL THE QUESTIONS ////////////////
const genPosition = [
    {
        type: "list",
        name: "Position",
        message: "Enter your position at the company",
        choices: [
            {
                value: 'Intern'
            },
            {
                value: 'Employee'
            },
            {
                value: 'Manager'
            },
            {
                value: 'Engineer'
            }
        ]
    }
];
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Whats your name?"
    },
    {
        type: "input",
        name: "id",
        message: "Whats your id number?"
    },
    {
        type: "input",
        name: "email",
        message: "Whats your email?"
    },
    {
        type: "input",
        name: "officeNum",
        message: "Whats your office number?"
    }
];
const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "Whats your name?"
    },
    {
        type: "input",
        name: "id",
        message: "Whats your id number?"
    },
    {
        type: "input",
        name: "email",
        message: "Whats your email?"
    }
];
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Whats your name?"
    },
    {
        type: "input",
        name: "id",
        message: "Whats your id number?"
    },
    {
        type: "input",
        name: "email",
        message: "Whats your email?"
    },
    {
        type: "input",
        name: "school",
        message: "Where are you going to school?"
    }
];
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Whats your name?"
    },
    {
        type: "input",
        name: "id",
        message: "Whats your id number?"
    },
    {
        type: "input",
        name: "email",
        message: "Whats your email?"
    },
    {
        type: "input",
        name: "github",
        message: "Whats your github profile name?"
    }
];

const startOva = [
    {
        type: "list",
        name: "create",
        message: "Would you like to create another employee card?",
        choices: [
            {
                value: 'Yes'
            },
            {
                value: 'No'
            }
        ]
    }
]
//////////////// ALL THE QUESTIONS ////////////////
function askAgain() {
    return inquirer.prompt(startOva)
}
function promptUser() {
    return inquirer.prompt(genPosition);
}
promptUser()
    .then(function (data) {


        if (data.Position === 'Manager') {
            inquirer.prompt(managerQuestions)
                .then(function (answers) {
                    const name = answers.name;
                    const id = answers.id;
                    const email = answers.email;
                    const position = data.Position;
                    const officeNum = answers.officeNum;
                    const cardMana = [name, id, email, officeNum, position];
                    console.log(cardMana);
                })
        } else if (data.Position === 'Employee') {
            inquirer.prompt(employeeQuestions)
                .then(function (answers) {
                    const name = answers.name;
                    const id = answers.id;
                    const email = answers.email;
                    const position = data.Position;
                    const cardEmpl = [name, id, email, position];
                    console.log(cardEmpl);
                })
        } else if (data.Position === 'Intern') {
            inquirer.prompt(internQuestions)
                .then(function (answers) {
                    const name = answers.name;
                    const id = answers.id;
                    const email = answers.email;
                    const school = answers.school;
                    const position = data.Position;
                    const cardInt = [name, id, email, school, position];
                    console.log(cardInt);
                    // askAgain().then(function(data1) {
                    //     if (data1.create === 'Yes'){
                    //         promptUser()
                    //     } else if (data1.create === 'No'){
                    //         console.log('Exiting CLI')
                    //     }
                    // })
                })
        } else if (data.Position === 'Engineer'){
            inquirer.prompt(engineerQuestions)
                .then(function (answers) {
                    const name = answers.name;
                    const id = answers.id;
                    const email = answers.email;
                    const position = data.Position;
                    const github = answers.github;
                    const cardEng = [name, id, email, github, position];
                    console.log(cardEng);
                })
        } else {
            console.log(Error)
        }


    })
