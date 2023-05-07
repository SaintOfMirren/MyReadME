// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const badges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
  };

  const badgeUrl = badges[license];

  if (!badgeUrl) {
    throw new Error(`Unsupported license: ${license}`);
  }

  return `![${license} license](${badgeUrl})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
  };

  const linkUrl = links[license];

  if (!linkUrl) {
    throw new Error(`Unsupported license: ${license}`);
  }

  return `(${linkUrl})`;
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
## License

This project is licensed under the ${license} License. Click [here]${renderLicenseLink(license)} for more information.

${renderLicenseBadge(license)}
`;
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
