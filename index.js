// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(number) {
        this._diameter = 
    }
    
    set circumference(number) {
        this._circumference = 
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

// for line 26 return Math.PI * Math.pow(this.radius, 2);
