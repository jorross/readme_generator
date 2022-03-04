// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = ["What's your name?", "Who's your daddy?", "Does he look like me?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

var i = 0;

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: questions[i++]
        },
        {
            type: "input",
            name: "daddy",
            message: questions[i++]
        },
        {
            type: "input",
            name: "me",
            message: questions[i++]
        },
    ])
    .then((data) => {
        const filename = "README.md";
        console.log(data);
        // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    
        // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        //   err ? console.log(err) : console.log('Success!')
        // );
      });
}

// Function call to initialize app
init();
