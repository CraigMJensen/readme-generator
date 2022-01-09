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

  `;
  if (userResponse.confirmLicense !== false && userResponse.license === 'MIT') {
    markdown += `
  
  ![badge](https://img.shields.io/badge/license-${userResponse.license}-green)

`;
  } else {
    markdown += `
  
  ![badge](https://img.shields.io/badge/license-${userResponse.license}-blue)

`;
  }
  `
## Description 

  * ${userResponse.description}

`;

  if (userResponse.confirmLink !== false) {
    markdown += `
## Link to Active Product

  * http://${userResponse.github}.github.io/${userResponse.projectPath}/

`;
  }

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

  if (userResponse.confirmLicense !== false && userResponse.license === 'MIT') {
    markdown += `
  
## License
  ![badge](https://img.shields.io/badge/license-${userResponse.license}-green)

  * [${userResponse.license}](https://choosealicense.com/licenses/mit/)
`;
  } else {
    markdown += `
  
## License
  ![badge](https://img.shields.io/badge/license-${userResponse.license}-blue)

  * [${userResponse.license}](https://choosealicense.com/community/)
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
