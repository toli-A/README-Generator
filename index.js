// Include packages needed for this application

import fs from "fs";
import inquirer from "inquirer";
import colors from "colors";
import generateMarkdown from "./utils/generateMarkdown.js";

// Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: colors.america("Project Title: "),
    name: "title",
  },
  {
    type: "input",
    message: colors.america("Project Description: "),
    name: "description",
  },
  {
    type: "input",
    message: colors.america("Installation: "),
    name: "installation",
  },
  {
    type: "input",
    message: colors.america("Usage: "),
    name: "usage",
  },
  {
    type: "list",
    message: colors.america("License: "),
    name: "license",
    choices: ["Apache", "BOOST", "BSD3", "BSD2", "MIT"],
  },
  {
    type: "input",
    message: colors.america("Contributing: "),
    name: "contributing",
  },
  {
    type: "input",
    message: colors.america("Tests: "),
    name: "tests",
  },
  {
    type: "input",
    message: colors.america("GitHub Username: "),
    name: "username",
  },
  {
    type: "input",
    message: colors.america("Email: "),
    name: "email",
  },
];

// Create a function to write README file
function writeFile(readME, data) {
  fs.writeFile(readME, data, (err) =>
    err ? console.log(err) : console.log(colors.america("README Generated!"))
  );
}

// Create a function to initialize app

function init() {
  console.log(colors.america("Welcome to America's BEST README generator!"));
  inquirer.prompt(questions).then((response) => {
    writeFile("sampleREADME.md", generateMarkdown(response));
  });
}

// Function call to initialize app
init();
