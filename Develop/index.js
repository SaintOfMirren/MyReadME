// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please provide a description of your project:",
      },
      {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions for your project:",
      },
      {
        type: "input",
        name: "usage",
        message: "Please provide usage information for your project:",
      },
      {
        type: "input",
        name: "contributing",
        message: "Please provide guidelines for contributing to your project:",
      },
      {
        type: "input",
        name: "tests",
        message: "Please provide test instructions for your project:",
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license would you like to use for your project?",
        choices: ["MIT", "GPLv2", "Apache", "None"],
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README file generated!")
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const {
          title,
          description,
          installation,
          usage,
          contributing,
          tests,
          license,
          github,
          email,
        } = answers;
    
        // Generate README content
        const content = `
    # ${title}
    
    ## Description
    
    ${description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
    
    ## Installation
    
    ${installation}
    
    ## Usage
    
    ${usage}
    
    ## Contributing
    
    ${contributing}
    
    ## Tests
    
    ${tests}
    
    ## License
    
    This project is licensed under the ${license} license.
    
    ## Questions
    
    If you have any questions, please feel free to contact me:
    
    - GitHub: [${github}](https://github.com/${github})
    - Email: [${email}](mailto:${email})
    `;
    
        // Write README file
        writeToFile("README.md", content);
      });
}

// Function call to initialize app
init();
