const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project",
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "",
    },
    {
        type: "input",
        name: "installation",
        message: "",
    },
    {
        type: "input",
        name: "usage",
        message: "?",
    },
    {
        type: "list",
        name: "license",
        choices: ["MIT", "CPC", "BSD"],
    },
    {
        type: "input",
        name: "contributing",
        message: "",
    },
    {
        type: "input",
        name: "tests",
        message: "",
    },
    {
        type: "input",
        name: "questions",
        message: "",
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(`Answer:`, answers.license)
    });
}

// function call to initialize program
init();
