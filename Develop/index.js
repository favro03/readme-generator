// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const fs = require('fs');
//const pageMD = generatePage(userName, email);
//const generatePage = require('./src/page-template.js');

// TODO: Create an array of questions for user input

 const questionsPrompts = () =>{
    return inquirer.prompt([
        {
            //Your GitHub user name
            type: 'input',
            name: 'user',
            message: 'Enter your GitHub user name. (required)',
            validate: userInput => {
                if (userInput){
                    return true;
                } else {
                    console.log('Please enter your GitHub user name!');
                    return false;
                }
            }
        },
        {
            //Your email address
            type: 'input',
            name: 'email',
            message: 'Enter your email address. (required)',
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
       {
            //Your Project Title
            type: 'input',
            name: 'title',
            message: 'What is the name of your Project? (required)',
            validate: titleInput => {
                if (titleInput){
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            //Description
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project (the what, why, and how). (required)',
            validate: descriptionInput => {
                if (descriptionInput){
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        
        {
            //Installation
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your project? (include links to repo or live site)(required)',
            validate: installationInput => {
                if (installationInput){
                    return true;
                } else {
                    console.log('Please enter your install instructions!');
                    return false;
                }
            }
        },
        {
            //usage
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (include a screenshot)(required)',
            validate: usageInput => {
                if (usageInput){
                    return true;
                } else {
                    console.log('Please enter your install instructions!');
                    return false;
                }
            }
        },
        {
            //License
            type: 'list',
            name: 'license',
            message: 'What type of license do you want to assign to your project? (required)',
            choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'None'],
            validate: licenseInput => {
                if (licenseInput){
                    return true;
                } else {
                    console.log('Please select your license information!');
                    return false;
                }
            }
        },
        
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter guidelines on how others can contribute.',
        },
        {
            //dependencies
            type: 'input',
            name: 'dependencies',
            message: 'List out any dependencies.'
        },
        {
            //tests
            type: 'input',
            name: 'tests',
            message: 'Enter test, and examples on how to run them.',
        },
        {
            //What do others need to know about using the repo
            type: 'input',
            name: 'usage',
            message: 'What do others need to know about using the repo?'
        },
        {
            //What does the user need to know to contribute to the repo?
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know to contribute to the repo?'
        },
    ])
    
};
questionsPrompts().then(answers => {
    const info = answers;
    console.log(info);
});

// TODO: Create a function to write README file

//fs.writeFile('./README-Template.md', pageMD, err => {
 //   if (err) throw new Error(err);
  
 //   console.log('Portfolio complete! Check out README-Template.md to see the output!');
  //});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


