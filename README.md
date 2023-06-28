# Node.js Logo Generator

## Description
The Node.js Logo Generator is a command-line application that takes in user input to generate a simple SVG logo. This application will prompt the user to select a color and shape, provide text for the logo, and will save the generated SVG to a `logo.svg` file.

## Installation
1. Clone this repository to your local machine.
2. Navigate to the root directory in your terminal.
3. Run `npm install` to install all necessary packages for the project.

## Usage
1. From the root directory, run `node index.js` in the terminal.
2. Follow the prompted questions to generate your logo:
   - Enter up to 3 characters for the logo text.
   - Enter a color for the logo text.
   - Choose a shape for the logo from the list (options: circle, triangle, square).
   - Enter a color for the shape.
3. Once all questions are answered, the logo will be generated and saved as `logo.svg` in the root directory.

## Demo Video

[![Demo Video](./Examples/Logo-Generator-Tutorial.gif)](./Examples/Logo-Generator-Tutorial.gif)

## Dependencies
- Node.js
- Inquirer
- Jest (for testing)

## Testing
To run tests, navigate to the root directory and run `npm test`.

## License
This project is licensed under the terms of the MIT license
