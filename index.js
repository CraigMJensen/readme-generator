// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (REQUIRED)',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username (REQUIRED)',
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your Github Username!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (REQUIRED)',
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log('The readme must include a title');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Add a description of the project: (REQUIRED)',
        validate: (descrInput) => {
          if (descrInput) {
            return true;
          } else {
            console.log('The readme must include a description');
            return false;
          }
        },
      },
      {
        type: 'confirm',
        name: 'confirmToC',
        message: 'Would you like to add a Table of Contents?',
        default: false,
      },
      {
        type: 'checkbox',
        name: 'contents',
        message:
          'Choose what you would like to include in your table of contents:',
        choices: ['Installation', 'Usage', 'Credits', 'License', 'features'],
        when: ({ confirmToC }) => {
          if (confirmToC) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to add installation instructions?',
        default: false,
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps for installation?',
        when: ({ confirmInstall }) => {
          if (confirmInstall) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to add usage instructions?',
        default: false,
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Instructions for usage:',
        when: ({ confirmUsage }) => {
          if (confirmUsage) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Do you want to add credits on the project?',
        default: false,
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Who do you want to credit?',
        when: ({ confirmCredits }) => {
          if (confirmCredits) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Do you want to add license(s) on the project?',
        default: false,
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What licensing do you want to use?',
        choices: [
          'MIT',
          'Apache',
          'Cloud Native Computing Foundation',
          'GNU',
          'npm packages',
          'OpenBSD',
          'Rust',
          'WordPress',
        ],
        when: ({ confirmLicense }) => {
          if (confirmLicense) {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((userData) => {
      const allData = [
        userData.name,
        userData.github,
        userData.title,
        userData.description,
        userData.contents,
        userData.installation,
        userData.usage,
        userData.credits,
        userData.license,
      ];
      const [
        name,
        github,
        title,
        description,
        contents,
        installation,
        usage,
        credits,
        license,
      ] = allData;
      console.log(allData, userData);
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
