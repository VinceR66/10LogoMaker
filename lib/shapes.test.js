const { Triangle, Square, Circle } = require('./shapes.js');

describe('Shapes', () => {

    describe('Triangle', () => {
        it('should verify that triangle shape string is correct', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
    describe('Circle', () => {
        it('should verify that circle shape string is correct', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });
    describe('Square', () => {
        it('should verify that square shape string is correct', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="blue" />');
        });
    });
});




