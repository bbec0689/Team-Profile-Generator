const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const inquirer = require('inquirer');

fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([


        {
            type: 'input',
            name: "name",
            message: "Enter the Team Manager's name",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log("You need to enter a valid Team Manager name");
                    return false;
                }

            }

        },
        {
            type: 'input',
            name: "id",
            message: "Enter Team Manager Employee ID",
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log("You need to enter a valid Employee ID");
                    return false;
                }

            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Team Managers Email',
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("You need to enter a valid Email Address");
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your Office Number',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("you need to enter a valid Office Number");
                    return false;
                }

            }

        }

    ])
}
const addOptions = employeeData => {
    console.log(`
==================
Additional Options
==================`);

    if (!employeeData.projects) {
        employeeData.projects = [];
    }


    return inquirer.prompt([

        {
            type: 'confirm',
            name: 'addOption',
            message: "Would you like to add another Team Member?",
            default: false
        },

        {
            type: 'checkbox',
            name: 'addTeamMember',
            message: 'Would you like to add a Intern, Engineer, or Manager to your team?',
            choices: ["Intern", "Engineer",],
            when: ({ addOption }) => addOption,
        },
        {
            type: 'input',
            name: 'InternName',
            message: "Please enter Intern's name.",
            when: (answers) => answers.addTeamMember == 'Intern'

        },
        {
            type: 'input',
            name: 'InternId',
            message: "Please enter Intern's Employee Id",
            when: (answers) => answers.InternName

        },
        {
            type: 'input',
            name: "internEmail",
            message: "Please enter Intern's Email",
            when: (answers) => answers.InternId
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Please enter Intern's School.",
            when: (answers) => answers.InternEmail
        },
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter Engineer's name.",
            when: (answers) => answers.addTeamMember == "Engineer"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Please enter Engineer's Employee Id",
            when: (answers) => answers.engineerName
        },
        {
            type: 'input',
            name: "engineerEmail",
            message: "Please enter Engineer's Email",
            when: (answers) => answers.engineerId
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Please enter Engineer's Github profile",
            when: (answers) => answers.engineerEmail
        },
        {
            type: 'confirm',
            name: 'finish',
            message: "Would you like to enter another employee?",
            default: true

        }
    ]).then(projectData => {
        employeeData.projects.push(projectData);
        if (projectData.finish) {
            return addOptions(employeeData);

        } else {
            return employeeData;
        }

    })

}



promptUser()
    .then(addOptions)
