// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// const renderLicenseBadge = require("./utils/generateMarkdown");
// const renderLicenseLink = require("./utils/generateMarkdown");
// const renderLicenseSection = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ["What's your name?", "What's the title of your project?", "What does your project do?", "How does a user install your project?", "Describe the usage of your project", "Which of the following licenses would you like to include?", "How does someone contribute to the project?", "How does a user run the test suite?", "What is your github profile name?", "What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, '', (err) => {
        if (err) {
            console.error(err);
        }
        else{
            console.log("Cleared file succeeded");
            fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("Write to file succeeded"));
        }
    });
}

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
            name: "title",
            message: questions[i++]
        },
        {
            type: "input",
            name: "description",
            message: questions[i++]
        },
        {
            type: "input",
            name: "install",
            message: questions[i++]
        },
        {
            type: "input",
            name: "usage",
            message: questions[i++]
        },
        {
            type: "rawlist",
            name: "license",
            message: questions[i++],
            choices: ["MIT License", "The Unlicense"]
        },
        {
            type: "input",
            name: "contribute",
            message: questions[i++]
        },
        {
            type: "input",
            name: "test",
            message: questions[i++]
        },
        {
            type: "input",
            name: "github",
            message: questions[i++]
        },
        {
            type: "input",
            name: "email",
            message: questions[i++]
        },
    ])
        .then((data) => {
            const filename = "README.md";
            data.badge = generateMarkdown.renderLicenseBadge(data.license);
            data.link = generateMarkdown.renderLicenseLink(data.license);
            data.license = generateMarkdown.renderLicenseSection(data.license);

            console.log(data);

            writeToFile(filename, generateMarkdown.generateMarkdown(data));
        });
}

// Function call to initialize app
init();
