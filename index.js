// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    
    set circumference(circumference) {
        this.radius = circumference / (Math.PI * 2);
    }

    get diameter() {
        let total = this.radius * 2;
        return total;
    }

    get circumference() {
        let total = Math.PI * this.diameter
        return total;
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
        // let total = Math.PI * this.radius.squared();
        // return total
    }

    // squared(num) {
    //     return num * num;
    // }
 
}

// let newCircle = new Circle(8)
// newCircle.circumference


// for line 26 return Math.PI * Math.pow(this.radius, 2);
