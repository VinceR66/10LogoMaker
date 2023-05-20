
const questions = [
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
        message: "Please enter your three letter logo",
        name: "logoLetters",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your three letter logo');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "What color do you want to use for the text?",
        name: "logoTextColor",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a text color');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "What will be the shape's color?",
        name: "logoShapeColor",
        validate: nameInput => {
            if (nameInput) {
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