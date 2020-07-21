// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2
  }

  get circumference() {
    return Math.PI * this.diameter
  }

  set circumference(circumference) {
    this.radius = (circumference / 2) / Math.PI
  }

  get area() {
    return Math.PI * (this.radius ** 2)
  }
}
