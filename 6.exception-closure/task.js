function parseCount(amount) {
    if (Number.isNaN(Number.parseFloat(amount))) {
        throw new Error("Невалидное значение");
    }
    return parseFloat(amount);
}

function validateCount(amount) {
    try {
        return parseCount(amount);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        const fullPerimeter = this.a + this.b + this.c;
        return fullPerimeter;
    }

    get area() {
        const halfP = (this.a + this.b + this.c) * 0.5;
        const s = Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c)).toFixed(3);
        return Number(s);
    }

}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
               return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}



