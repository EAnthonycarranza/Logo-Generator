// Defines a Circle class.
class Circle {
    // The Circle constructor accepts three parameters: color, text, and textColor.
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    // The render method returns the SVG markup for the circle logo.
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.color}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

// Defines a Triangle class.
class Triangle {
    // The Triangle constructor accepts three parameters: color, text, and textColor.
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    // The render method returns the SVG markup for the triangle logo.
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

// Defines a Square class.
class Square {
    // The Square constructor accepts three parameters: color, text, and textColor.
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    // The render method returns the SVG markup for the square logo.
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="75" y="25" width="150" height="150" fill="${this.color}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

// Exports the three classes for use in other modules.
module.exports = { Circle, Triangle, Square };
