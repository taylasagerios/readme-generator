const inquirer = require("inquirer");
const fs = require("fs");
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "What is a description of your project?"
        },
        {
            type: "input",
            name: "install",
            message: "How do you install your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "How does a user use your project?"
        },
        {
            type: "list",
            name: "license",
            message: "What license should your project use?",
            choices: ['MIT', "Apache", "Artistic", "none"]
        },
        {
            type: "input",
            name: "contribution",
            message: "How do you contribute to this project?"
        },
        {
            type: "input",
            name: "test",
            message: "How do you test in this project?"
        },
        {
            type: "input",
            name: "githubName",
            message: "What is your github user name?"
        },
        {
            type: "input",
            name: "email",
            message: "What email address should people use to contact you?"
        },
    ])
    .then((responses) => {
        var readmeText = genReadme(responses)
        fs.writeFile('README.md', readmeText, (err) =>
            err ? console.error(err) : console.log('Success!')
        );

    })

function genReadme(answers){
    console.log(answers)
    var readmeTxt = ""
    readmeTxt += `# Title
    ${answers.title}
    
## Description
    ${answers.description}
## install
    ${answers.install}   
    
## usage
  ${answers.usage}
## license
${answers.license}
## contribution
${answers.contribution}
## test
${answers.test}
## questions 
[${answers.githubName}](https://github.com/${answers.githubName})
please contact me at ${answers.email}
    

    `
return readmeTxt
}
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions