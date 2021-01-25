
//required files
fs = require('fs');
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const writeFile = require("./utils/CreateSite");
const GenerateSite = require('./utils/CreateSite');
const { finished } = require('stream');

const mainMenu = employeeData => {

    employeeData = {}

    return inquirer.prompt([
        {

            type: 'input',
            name: "managerName",
            message: "Please enter Team Manager name",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log("To begin, Please enter a valid Team Manager name");
                    return false;
                }

            }


        },

        {
            type: 'input',
            name: "managerId",
            message: "Please enter Team Manager Employee ID",
            validate: managerid => {
                if (managerid) {
                    return true;
                } else {
                    console.log("To begin, Please enter a valid Employee ID");
                    return false;
                }

            }

        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter Team Manager Email.',
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("To begin, Please enter a valid Email Address");
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your Office Number.',
            validate: managerEmail => {
                if (managerEmail || !NaN) {
                    return true;
                } else {
                    console.log("To begin, Please enter a Office Number.");
                    return false;
                }

            }
        },




        {
            type: 'confirm',
            name: 'menuChoice',
            message: "Welcome to the Main Menu. Would you like to add a Team Member?",
            default: false,
            when: ({ officeNumber }) => officeNumber || ({ finalize }) == true
        },

        {
            type: 'checkbox',
            name: 'addTeammember',
            message: 'Would you like to add a Intern, or an Engineer to your team?',
            choices: ["Intern", "Engineer"],
            when: ({ menuChoice }) => menuChoice,



        },
        {
            type: 'input',
            name: 'Internname',
            message: "Please enter Intern's name.",
            when: (answers) => answers.addTeammember == 'Intern'

        },
        {
            type: 'input',
            name: 'Internid',
            message: "Please enter Intern's Employee Id",
            when: (answers) => answers.Internname

        },
        {
            type: 'input',
            name: "internEmail",
            message: "Please enter Intern's Email",
            when: (answers) => answers.Internid
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Please enter Intern's School.",
            when: (answers) => answers.internEmail
        },
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter Engineer's name.",
            when: (answers) => answers.addTeammember == "Engineer"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Please enter Engineer's Employee Id",
            when: (answers) => answers.engineerName,

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
            message: "Please enter Engineer's Github profile address",
            when: (answers) => answers.engineerEmail
        },
        {
            type: 'input',
            name: 'engineerGithubname',
            message: "please enter Engineer's Github name.",
            when: (answers) => answers.engineerGithub
        },
        {
            type: 'confirm',
            name: 'finalize',
            message: "Would you like to enter another employee?",
            default: false
        },

        {
            type: 'checkbox',
            name: 'laddTeammember',
            message: 'Would you like to add a Intern, or an Engineer to your team?',
            choices: ["Intern", "Engineer"],
            when: (answers) => answers.finalize == true
        },
        {
            type: 'input',
            name: 'lInternname',
            message: "Please enter Intern's name.",
            when: (answers) => answers.laddTeammember == 'Intern'

        },
        {
            type: 'input',
            name: 'lInternid',
            message: "Please enter Intern's Employee Id",
            when: (answers) => answers.lInternname

        },
        {
            type: 'input',
            name: "linternEmail",
            message: "Please enter Intern's Email",
            when: (answers) => answers.lInternid
        },
        {
            type: 'input',
            name: 'linternSchool',
            message: "Please enter Intern's School.",
            when: (answers) => answers.linternEmail
        },
        {
            type: 'input',
            name: 'lengineerName',
            message: "Please enter Engineer's name.",
            when: (answers) => answers.laddTeammember == "Engineer"
        },
        {
            type: 'input',
            name: 'lengineerId',
            message: "Please enter Engineer's Employee Id",
            when: (answers) => answers.lengineerName,

        },
        {
            type: 'input',
            name: "lengineerEmail",
            message: "Please enter Engineer's Email",
            when: (answers) => answers.lengineerId
        },
        {
            type: 'input',
            name: 'lengineerGithub',
            message: "Please enter Engineer's Github profile address",
            when: (answers) => answers.lengineerEmail
        },
        {
            type: 'input',
            name: 'lengineerGithubname',
            message: "please enter Engineer's Github name.",
            when: (answers) => answers.lengineerGithub
        },
        {
            type: 'confirm',
            name: 'finished',
            message: "Would you like to enter another employee?",
            default: false
        },




    ])

}



mainMenu().then(answers => {



    var headofteeam = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)


    var managerName = answers.managerName;
    var managerId = answers.managerId;
    var managerEmail = answers.managerEmail;
    var managerOfficenumber = answers.officeNumber;




    var employee = new Intern(answers.Internname, answers.Internid, answers.internEmail, answers.internSchool)

    var internName = answers.Internname;
    var internId = answers.Internid;
    var internEmail = answers.internEmail;
    var internSchool = answers.internSchool;




    var Producer = new Engineer(answers.engineerId, answers.engineerId, answers.engineerEmail, answers.engineeremail, answers.engineerGithub)
    var engineername = answers.lengineerName;
    var engineerid = answers.lengineerId;
    var engineeremail = answers.lengineerEmail;
    var engineerguthubprofile = answers.lengineerGithub;
    var engineergithubname = answers.lengineerGithubname;


    const generateManager = () => {


        return `
    <!--Manager Card-->
    <div class=" card flex card text-white bg-secondary mb-3" style="max-width: 18rem;">
    <div class=" bg-dark card-header">Manager: <span>${managerName}</span></div>
    <div class=" card-body">
    <ul class=" text-white bg-secondary list-group list-group-flush">
    <li class=" bg-secondary list-group-item">ID:<span>${managerId} </span></li>
    <li class=" bg-secondary list-group-item">Email: <a target="_blank" href="mailto:piotr@mailtrap.io,${managerEmail}">${managerEmail}</a></li>
    <li class=" bg-secondary list-group-item">Office Number: <span>${managerOfficenumber}</span></li>
    </ul>
    </div>
    </div>`
    }

    const generateEngineer = () => {



        return `
        <div class=" card flex card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class=" bg-dark card-header">Engineer: <span>${engineername}</span></div>
        <div class=" card-body">
        <ul class=" text-white bg-secondary list-group list-group-flush">
        <li class=" bg-secondary list-group-item">ID: <span>${engineerid} </span></li>
        <li class=" bg-secondary list-group-item">Email: <a target="_blank" href="mailto:piotr@mailtrap.io,${engineeremail}">${engineeremail}</a></li>
        <li class=" bg-secondary list-group-item">Github: <a target="_blank" href="${engineerguthubprofile}">${engineergithubname}</a></li>
        </ul>
        </div>
        </div>`
    }


    const generateIntern = () => {




        return `
    <div class=" card flex card text-white bg-secondary mb-3" style="max-width: 18rem;">
    <div class=" bg-dark card-header">Intern: <span>${internName}</span></div>
    <div class=" card-body">
    <ul class=" text-white bg-secondary list-group list-group-flush">
    <li class=" bg-secondary list-group-item">ID: <span>${internId} </span></li>
    <li class=" bg-secondary list-group-item">Email: <a target="_blank" href="mailto:piotr@mailtrap.io,${internEmail}">${internEmail}</a></li>
    <li class=" bg-secondary list-group-item">School: <span>${internSchool}</span></li>
    </ul>
    </div>
    </div>`
    }


    const templateData = () => {

        return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
        <!--BootStrap-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
            
        <!--Font Awesome-->
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
            
        <!--CSSSheet-->
        <link rel="stylesheet" href="./style.css">
        <title>Team-File</title>
        </head>
        <body>
            
        <div class=" text-light flex-header header bg-dark">Deployed Team</div>
            
        <div class="flex-body">
        ${generateManager()}
        ${generateEngineer()}
        ${generateIntern()}
        </div>
        <!--JQuery-->
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>   
        </body>
        </html>`
    }

    const writeHTML = content => {
        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/index.html', content, function (err) {
                if (err) {
                    reject(err);
                    return;
                }

                resolve({ ok: true, message: 'File Created!' });


            });
        });

    };

    writeHTML(templateData())




})    