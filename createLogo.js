


const { Triangle, Square, Circle } = require("./lib/shapes");


function createLogo(answers) {

    if (answers.logoShape === "Triangle") {
        shapeChoice = new Triangle();
        svgVersion = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${answers.logoShapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.logoTextColor}">${answers.logoLetters}</text></svg>`;

    } else if (answers.logoShape === "Square") {
        shapeChoice = new Square();
        svgVersion = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="73" y="40" width="160" height="160" fill="${answers.logoShapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.logoTextColor}">${answers.logoLetters}</text></svg>`;

    } else {
        shapeChoice = new Circle();
        svgVersion = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${answers.logoShapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.logoTextColor}">${answers.logoLetters}</text></svg>`;
    }

}

module.exports = createLogo;

