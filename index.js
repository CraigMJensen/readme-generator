// Import packages to be used
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Choices = require('inquirer/lib/objects/choices');

// Import markdown
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions
const questions = [
  {
    type: 'input',
    name: 'email',
    message: 'What is your Email? (REQUIRED)',
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your Email!');
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
    type: 'confirm',
    name: 'confirmLink',
    message: 'Do you want to include a link for the live product?',
    default: true,
  },
  {
    type: 'input',
    name: 'projectPath',
    message:
      'Enter the path name for your project repository: (http://github.com/<userName>/< *pathName* >',
    when: ({ confirmLink }) => {
      if (confirmLink) {
        return true;
      } else {
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
    type: 'list',
    name: 'license',
    message: 'What licensing do you want to use?',
    choices: ['Apache_License_2.0', 'GNU_GPLv3', 'ISC', 'MIT'],
    when: ({ confirmLicense }) => {
      if (confirmLicense) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'confirm',
    name: 'confirmFeatures',
    message: 'Do you want to add any features?',
    default: false,
  },
  {
    type: 'input',
    name: 'features',
    message: 'What are the features of this product?',
    when: ({ confirmFeatures }) => {
      if (confirmFeatures) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'confirm',
    name: 'confirmContributing',
    message: 'Would you like to add contributors?',
    default: false,
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Add contributors:',
    when: ({ confirmContributing }) => {
      if (confirmContributing) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'confirm',
    name: 'confirmTests',
    message: 'Would you like to add any tests?',
    default: false,
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Add test information:',
    when: ({ confirmTests }) => {
      if (confirmTests) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// Write file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log('Success! Your README.md file has been generated');
  });
};

const writeFileAsync = util.promisify(writeToFile);

// Initial app, await inquirer, await generate README
async function init() {
  try {
    const userResponse = await inquirer.prompt(questions);

    const markdown = generateMarkdown(userResponse);

    await writeFileAsync('./generated/README.md', markdown);
  } catch (error) {
    console.log(error);
  }
}

// Function call to initialize app
init(
  console.log('===================\nREADME.md Generator\n===================')
);
