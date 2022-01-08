// TODO: Create a function that returns a license badge based on which license is passed in

const { log } = require('console');

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponse) {
  let generateToC = `## Table of Contents`;
  if (userResponse.confirmInstall !== false) {
    generateToC += `

  * [Installation](#installation)`;
  }

  if (userResponse.confirmUsage !== false) {
    generateToC += `
  * [Usage](#usage)`;
  }

  if (userResponse.confirmCredits !== false) {
    generateToC += `
  * [Credits](#credits)`;
  }

  if (userResponse.confirmLicense !== false) {
    generateToC += `
  * [License](#license)`;
  }

  if (userResponse.confirmFeatures !== false) {
    generateToC += `
  * [Features](#features)`;
  }

  if (userResponse.confirmContributing !== false) {
    generateToC += `
  * [Contributing](#contributing)`;
  }

  if (userResponse.confirmTests !== false) {
    generateToC += `
  * [Tests](#tests)`;
  }

  let markdown = `# ${userResponse.title}

## Description 

  * ${userResponse.description}

`;

  if (userResponse.confirmToC !== false) {
    markdown += generateToC;
  }

  if (userResponse.confirmInstall !== false) {
    markdown += `

## Installation

  * ${userResponse.installation}
`;
  }

  if (userResponse.confirmUsage !== false) {
    markdown += `
## Usage

  * ${userResponse.usage}
`;
  }

  if (userResponse.confirmCredits !== false) {
    markdown += `
## Credits

  * ${userResponse.credits}
`;
  }

  if (userResponse.confirmLicense !== false) {
    markdown += `
## License

  * ${userResponse.license}
`;
  }

  if (userResponse.confirmFeatures !== false) {
    markdown += `
## Features

  * ${userResponse.features}
`;
  }

  if (userResponse.confirmContributing !== false) {
    markdown += `
## Contributing

  * ${userResponse.contributing}
`;
  }

  if (userResponse.confirmTests !== false) {
    markdown += `
## Tests

  * ${userResponse.tests}
`;
  }

  markdown += `
## Contact Me

  * ${userResponse.email}
`;

  return markdown;
}

module.exports = generateMarkdown;
