// Variables for license links
const apacheLicense = '(https://choosealicense.com/licenses/apache-2.0/)';
const gnuLicense = '(https://choosealicense.com/licenses/gpl-3.0/)';
const iscLicense = '(https://choosealicense.com/licenses/isc/)';
const mitLicense = '(https://choosealicense.com/licenses/mit/)';

// Generate Markdown
function generateMarkdown(userResponse) {
  let generateToC = `## Table of Contents`;
  if (userResponse.confirmInstall) {
    generateToC += `

  * [Installation](#installation)`;
  }

  if (userResponse.confirmUsage) {
    generateToC += `
  * [Usage](#usage)`;
  }

  if (userResponse.confirmCredits) {
    generateToC += `
  * [Credits](#credits)`;
  }

  if (userResponse.confirmLicense) {
    generateToC += `
  * [License](#license)`;
  }

  if (userResponse.confirmFeatures) {
    generateToC += `
  * [Features](#features)`;
  }

  if (userResponse.confirmContributing) {
    generateToC += `
  * [Contributing](#contributing)`;
  }

  if (userResponse.confirmTests) {
    generateToC += `
  * [Tests](#tests)`;
  }

  let markdown = `
  # ${userResponse.title}
  `;
  if (userResponse.confirmLicense) {
    if (userResponse.license == 'Apache_License_2.0') {
      markdown += `

  ![badge](https://img.shields.io/badge/license-${userResponse.license}-green)

`;
    } else if (userResponse.license == 'GNU_GPLv3') {
      markdown += `
  
  ![badge](https://img.shields.io/badge/license-${userResponse.license}-yellowgreen)

`;
    } else if (userResponse.license == 'ISC') {
      markdown += `
  
  ![badge](https://img.shields.io/badge/license-${userResponse.license}-yellow)

`;
    } else if (userResponse.license == 'MIT') {
      markdown += `
  
  ![badge](https://img.shields.io/badge/license-${userResponse.license}-orange)

`;
    }
  }
  markdown += `

## Description 

  * ${userResponse.description}

`;

  if (userResponse.confirmLink) {
    markdown += `

## Link to Active Product

  * http://${userResponse.github}.github.io/${userResponse.projectPath}/

`;
  }

  if (userResponse.confirmToC) {
    markdown += generateToC;
  }

  if (userResponse.confirmInstall) {
    markdown += `

## Installation

  * ${userResponse.installation}

`;
  }

  if (userResponse.confirmUsage) {
    markdown += `

## Usage

  * ${userResponse.usage}
`;
  }

  if (userResponse.confirmCredits) {
    markdown += `

## Credits

  * ${userResponse.credits}
`;
  }
  if (userResponse.confirmLicense) {
    if (userResponse.license == 'Apache_License_2.0') {
      markdown += `
  
## License

  ![badge](https://img.shields.io/badge/license-${userResponse.license}-green)

  * This project is covered under [${userResponse.license}]${apacheLicense}

`;
    } else if (userResponse.license == 'GNU_GPLv3') {
      markdown += `
  
## License

  ![badge](https://img.shields.io/badge/license-${userResponse.license}-yellowgreen)

  * This project is covered under [${userResponse.license}]${gnuLicense}

`;
    } else if (userResponse.license == 'ISC') {
      markdown += `
  
## License

  ![badge](https://img.shields.io/badge/license-${userResponse.license}-yellow)

  * This project is covered under [${userResponse.license}]${iscLicense}

`;
    } else if (userResponse.license == 'MIT') {
      markdown += `
  
## License

  ![badge](https://img.shields.io/badge/license-${userResponse.license}-orange)

  * This project is covered under [${userResponse.license}]${mitLicense}

`;
    }
  }

  if (userResponse.confirmFeatures) {
    markdown += `

## Features

  * ${userResponse.features}

`;
  }

  if (userResponse.confirmContributing) {
    markdown += `

## Contributing

  * ${userResponse.contributing}

`;
  }

  if (userResponse.confirmTests) {
    markdown += `

## Tests

  * ${userResponse.tests}

`;
  }

  markdown += `

## Questions?

  * Contact me at: ${userResponse.email}
  * Github: https://github.com/${userResponse.github}/

`;

  return markdown;
}

// Exports markdown
module.exports = generateMarkdown;
