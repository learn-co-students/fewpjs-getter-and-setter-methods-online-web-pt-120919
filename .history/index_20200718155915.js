class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter(){ 
    return this._radius * 2
  }

}