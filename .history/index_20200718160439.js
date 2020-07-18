class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter(){ 
    return this.radius * 2
  }
  get circumference() {
    return Math.PI * this.diameter
  }

  get area() {
    return Math.PI * (this.radius ** 2)
  }

  set diameter(diameterIn) {
    this._diameter = diameterIn
  }

  set circumference(circumference) {
    this._circumference = circumference
  }

}