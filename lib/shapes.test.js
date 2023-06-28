// Import the Circle, Square, and Triangle classes from the shapes module.
const { Circle, Square, Triangle } = require('./shapes');

// Define a test for the Circle class. The description of the test is 'Circle should generate correct SVG'.
test('Circle should generate correct SVG', () => {
    // Create a new instance of the Circle class, with "green" as the color, "SVG" as the text, and "white" as the text color.
    const circle = new Circle("green", "SVG", "white");

    // Expect the output of the render method (with leading/trailing white spaces removed) 
    // to equal the expected SVG string (also with leading/trailing white spaces removed).
    expect(circle.render().trim()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="green" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
    `.trim());
});

// Similar tests are defined for the Square and Triangle classes, with different color, text, and text color arguments.
test('Square should generate correct SVG', () => {
    const square = new Square("red", "SVG", "black");
    expect(square.render().trim()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="75" y="25" width="150" height="150" fill="red" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVG</text>
        </svg>
    `.trim());
});

test('Triangle should generate correct SVG', () => {
    const triangle = new Triangle("blue", "SVG", "yellow");
    expect(triangle.render().trim()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">SVG</text>
        </svg>
    `.trim());
});
