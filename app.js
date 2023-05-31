console.log("test");

const fs = require('fs');

const inquirer = require("inquirer");

const createLogo = require('./createLogo.js');
const { questions } = require("./questions");
function askQuestions() {
    inquirer.prompt(questions).then(function (answers) {
        console.log(answers);

        return createLogo(answers);
    })

        .then(data => {
            return writeFile(data);
        })
}


function main() {
    console.log(questions);
    askQuestions();
}

main();


const writeFile = data => {
    fs.writeFile('output.svg', svgVersion, err => {

        if (err) {
            console.log(err);
            return;

        } else {
            console.log("Your README has been successfully created!")
        }
    })

};



