// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = ["What's your name?", "What's the title of your project?", "What does your project do?", "How does a user install your project?", "Describe the usage of your project", "Which of the following licenses would you like to include?", "How does someone contribute to the project?", "How does a user run the test suite?", "What is your github profile name?", "What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => err ? console.error(err) : console.log("Write to file succeeded"));
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
            console.log(data);
            if (data.license === "MIT License") {
                data.license = `MIT License

            Copyright (c) [year] [fullname]
            
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
            `;
            }
            else {
                data.license = `
            This is free and unencumbered software released into the public domain.

            Anyone is free to copy, modify, publish, use, compile, sell, or
            distribute this software, either in source code form or as a compiled
            binary, for any purpose, commercial or non-commercial, and by any
            means.

            In jurisdictions that recognize copyright laws, the author or authors
            of this software dedicate any and all copyright interest in the
            software to the public domain. We make this dedication for the benefit
            of the public at large and to the detriment of our heirs and
            successors. We intend this dedication to be an overt act of
            relinquishment in perpetuity of all present and future rights to this
            software under copyright law.

            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
            IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
            OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
            ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
            OTHER DEALINGS IN THE SOFTWARE.

            For more information, please refer to <https://unlicense.org>
            `;
            }
            writeToFile(filename, generateMarkdown(data));
            // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

            // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            //   err ? console.log(err) : console.log('Success!')
            // );
        });
}

// Function call to initialize app
init();
