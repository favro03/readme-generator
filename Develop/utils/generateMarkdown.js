// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = license =>{
  if(license==="MIT"){
      return`
![MIT License](/assets/images/MITBadge.png)
      `;
  }
  else if(license==="Apache 2.0"){
      return`
![Apache 2.0 License](/assets/images/apacheBadge.jpeg)
      `;
  }
  else if(license==="GNU GPLv3"){
      return`
![GPL License](/assets/images/GPLBadge.png)
      `;
  }
  else if(license==="GPL"){
      return`
      ![GPL License](/assets/images/GPLBadge.png)
      `
  }
  else{
      return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license =>{
  if(license === 'MIT'){
      return `
[MIT License](https://choosealicense.com/licenses/mit/)
      `;
  }
  else if(license === 'Apache 2.0'){
      return`
[Apache License](https://choosealicense.com/licenses/apache-2.0/)
      `;
  }
  else if(license==='GNU GPLv3'){
      return`
[GNU GENERAL PUBLIC LICENSE](https://choosealicense.com/licenses/gpl-3.0/) 
    `;
  } else{
      return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const tableOfContentsLicense = license =>{
  if(license === 'None'){
      return "";
      
  } else {
      return `
* [License](#license)
      `;
  }
};
const renderLicenseSection = license  =>{
  if (license === 'None'){
      return "";
      
  }  else{ 
      return `
## License
      `;
  }
};
//brings in the contributing section only if the user enters information
const contributingOption = contributing  =>{
  if (!contributing){
      return "";
      
  }  else{ 
      return `
## Contributing
  
${contributing}
      `;
  }
};
//test
const testsOption = tests  =>{
  if (!tests){
      return "";
      
  }  else{ 
      return `
## Tests
  
${tests}
      `;
  }
};

//these functions format the table of contents to remove/add the optional contributing/testing sections
const tableOfContentsCont = contributing =>{
  if(contributing){
      return `
* [Contributing](#contributing)
      `;
  } else{
      return "";
  }
};
const tableOfContentsTest = tests =>{
  if(tests){
      return `
* [Tests](#tests)
      `;
  } else {
      return "";
  }
};

// TODO: Create a function to generate markdown for README
module.exports = templateData => {
  console.log(templateData);
  const{user, email, title, description, installation, usage, license, contributing, dependencies, tests, other, repo} = templateData;
  
  return `
${renderLicenseBadge(license)}

# ${templateData.title}

## Description
  ${templateData.description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${tableOfContentsLicense(license)}
${tableOfContentsCont(contributing)}
${tableOfContentsTest(tests)}
* [Questions](#questions)
  

## Installation
${templateData.installation}


## Usage
${templateData.description}

${renderLicenseSection(license)}
${renderLicenseLink(license)}

${contributingOption(contributing)}


${testsOption(tests)}
 

## Questions
You can view the repo here [GitHub Repo](https://github.com/${templateData.user})

[Contact Us](mailto:${templateData.email})
  `;
};
