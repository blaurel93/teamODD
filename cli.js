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

//////////////// ALL THE QUESTIONS ////////////////
function createCard(answers) {
    return `
    <div class="card">
        <div class="card-header" style="padding: 15px;">
            <p class="name">${answers.name}</p>
            <p><i class=""></i>${answers.role}</p>
        </div>
        <div class="card-body">
            <p class="list-item">ID: ${answers.id}</p>
            <p class="list-item">Email:<a href="#"> ${answers.email}</a></p>
            <p class="list-item">School: ${answers.school}</p>
        </div>
    </div>
`

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

                    const Manager1 = new Manager(name, id, email, officeNum);
                    console.log(Manager1);
                    console.log(Manager1.makeCard())
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
                    const Intern1 = new Intern(name, id, email, school);
                    console.log(Intern1.makeCard())
                })

        } else if (data.Position === 'Engineer') {
            inquirer.prompt(engineerQuestions)
                .then(function (answers) {
                    const name = answers.name;
                    const id = answers.id;
                    const email = answers.email;
                    const position = data.Position;
                    const github = answers.github;
                    const cardEng = [name, id, email, github, position];
                    console.log(cardEng);
                    const Engineer1 = new Engineer(name, id, email, github);
                    const thiiisCard = (Engineer1.makeCard())
                    // $(".appendHere").append(thiiisCard);
                })
        } else {
            console.log(Error)
        }


    })