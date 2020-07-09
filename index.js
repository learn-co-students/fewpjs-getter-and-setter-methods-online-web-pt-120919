// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius 
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    get area() {
        return Math.PI * this.radius ** 2
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI)
    }

    // The reason is that the only attribute our object has is radius - 
    // everything else is calculated based on that attribute
    // So, if we want to "set" the diameter, given that our only attribute 
    // is radius, then we need to divide the given diameter by two to get 
    // the radius and save it in the radius attribute
}