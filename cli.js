///////////////////////////////////////////  JAVASCRIPT REQS  ///////////////////////////////////////////
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const inquirer = require("inquirer");
const fs = require("fs");
const GenHTML = require("./lib/GenHTML")

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
const startOvaQuestions = [
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
];
function askAgain() {
    return inquirer.prompt(startOvaQuestions)
}
//////////////// ALL THE QUESTIONS ////////////////
const company = [];

function generate(res) {
    fs.writeFile('CompanyScrubs.html', GenHTML(res), (err) => {
        if (err) throw err;
    })
    console.log('Success! check for your new HTML page!')
}

function askQuestions(data) {
    //////////////////// MANAGER //////////////////// 
    if (data.Position === 'Manager') {
        inquirer.prompt(managerQuestions)
            .then(function (answers) {
                const name = answers.name;
                
                var name1 = name;
                console.log(name1);
                var str = name1.toLowerCase().split(" ");
                for (var i = 0, x = str.length; i < x; i++) {
                    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
                }
                var newName = str.join(" ");
                console.log(newName);


                const id = answers.id;
                const email = answers.email;
                const position = data.Position;
                const officeNum = answers.officeNum;
                const cardMana = [newName, id, email, officeNum, position];
                console.log(cardMana);


                const Manager1 = new Manager(newName, id, email, officeNum);
                let ManagerCard = Manager1.makeCard();
                company.push(ManagerCard);
                askAgain().then(function (res) {
                    if (res.create === "Yes") {
                        promptUser(genPosition)
                            .then(function (res) {
                                askQuestions(res)
                            })
                    } else {
                        console.log('Not the droids your looking for?');
                        generate(company);
                    }
                })
            })
     //////////////////// MANAGER //////////////////// 
     //////////////////// INTERN //////////////////// 
    } else if (data.Position === 'Intern') {
        inquirer.prompt(internQuestions)
            .then(function (answers) {
                const name = answers.name;
                var name1 = name;

                console.log(name1);
                var str = name1.toLowerCase().split(" ");
                for (var i = 0, x = str.length; i < x; i++) {
                    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
                }
                var newName = str.join(" ");
                console.log(newName);

                const id = answers.id;
                const email = answers.email;
                const school = answers.school;
                const position = data.Position;
                const cardInt = [newName, id, email, school, position];
                console.log(cardInt);
                const Intern1 = new Intern(newName, id, email, school);
                let InternCard = Intern1.makeCard();
                company.push(InternCard);
                askAgain().then(function (res) {
                    if (res.create === "Yes") {
                        promptUser(genPosition)
                            .then(function (res) {
                                askQuestions(res)
                            })
                    } else {
                        console.log('Not the droids your looking for?');
                        generate(company);
                    }
                })
            })
    //////////////////// INTERN ////////////////////
    //////////////////// ENGINEER ////////////////////
    } else if (data.Position === 'Engineer') {
        inquirer.prompt(engineerQuestions)
            .then(function (answers) {
                const name = answers.name;

                var name1 = name;
                console.log(name1);
                var str = name1.toLowerCase().split(" ");
                for (var i = 0, x = str.length; i < x; i++) {
                    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
                }
                var newName = str.join(" ");
                console.log(newName);

                const id = answers.id;
                const email = answers.email;
                const position = data.Position;
                const github = answers.github;
                const cardEng = [newName, id, email, github, position];

                console.log(cardEng);
                const Engineer1 = new Engineer(newName, id, email, github);
                let EngineerCard = Engineer1.makeCard();
                company.push(EngineerCard);
                // const thiiisCard = (Engineer1.makeCard())
                askAgain().then(function (res) {
                    if (res.create === "Yes") {
                        promptUser(genPosition)
                            .then(function (res) {
                                askQuestions(res)
                            })
                    } else {
                        console.log('Not the droids your looking for?');
                        generate(company);
                    }
                })
            })
    } else {
        console.log(Error)
    }
}
//////////////////// ENGINEER ////////////////////
function promptUser() {
    return inquirer.prompt(genPosition);
}
promptUser()
    .then(function (data) {
        askQuestions(data);
    })