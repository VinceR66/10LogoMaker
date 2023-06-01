const { validateHTMLColorHex, validateHTMLColorName } = require('validate-color');

const questions = [
    {
        type: 'input',
        message: "Please enter your three letter logo",
        name: "logoLetters",
        validate: nameInput => {
            let length = nameInput.length;
            if (length == 3) {

                return true;

            } else {

                return 'Please enter your three letter logo';

            }
        }
    },
    {
        type: 'list',
        message: "What shape are you using for your Logo?",
        name: "logoShape",
        choices: ["Circle", "Square", "Triangle"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please choose a shape');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Choose text color - enter color keyword or a hexadecimal number?",
        name: "logoTextColor",
        validate: nameInput => {
            if (validateHTMLColorName(nameInput) || (validateHTMLColorHex(nameInput))) {
                return true;
            } else {
                console.log('Please enter a text color');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Choose shape color - enter color keyword or a hexadecimal number?",
        name: "logoShapeColor",
        validate: nameInput => {
            if (validateHTMLColorName(nameInput) || (validateHTMLColorHex(nameInput))) {
                return true;
            } else {
                console.log('Please enter the color of the shape');
                return false;
            }
        }
    }
];

module.exports = {
    questions
}