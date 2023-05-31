const Shapes = require('./shapes.js');

describe('Shapes', () => {

    describe('Triangle', () => {
        it('should verify that triangle shape string is correct', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});




