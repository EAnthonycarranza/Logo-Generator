// Import the required packages and modules
const inquirer = require('inquirer'); // package for creating interactive command line user interface
const fs = require('fs'); // built-in Node.js module for file system operations
const { Circle, Square, Triangle } = require('./lib/shapes'); // import our shape classes from shapes.js

// Use inquirer to prompt the user for their input
inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo (up to 3 characters):',
        // Validation to limit the text to 3 characters
        validate: function(value) {
            if (value.length > 3) {
                return 'Please enter up to 3 characters.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color for the text:',
        // No validation for color - any string is accepted
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'], // limit the choices to these three shapes
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color for the shape:',
        // No validation for color - any string is accepted
    }
]).then(answers => {
    // Based on the user's choice, create the corresponding shape
    let shape;
    if (answers.shape === 'circle') {
        shape = new Circle(answers.shapeColor, answers.text, answers.textColor);
    } else if (answers.shape === 'square') {
        shape = new Square(answers.shapeColor, answers.text, answers.textColor);
    } else if (answers.shape === 'triangle') {
        shape = new Triangle(answers.shapeColor, answers.text, answers.textColor);
    }
    // Render the SVG string from the shape
    const svg = shape.render();

    // Write the SVG string to a file
    fs.writeFileSync('logo.svg', svg);

    // Notify the user that the file has been generated
    console.log('Generated logo.svg');
});

