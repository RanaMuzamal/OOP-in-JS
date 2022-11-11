class Shape {
    constructor(name, sides, sideLength)
    {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter()
    {
        let perimeter= this.sides * this.sideLength;
        console.log(perimeter);
    }
}

const square = new Shape('square', 4, 5);
square.calcPerimeter();
const triangle = new Shape('triangle', 3, 10);
triangle.calcPerimeter();