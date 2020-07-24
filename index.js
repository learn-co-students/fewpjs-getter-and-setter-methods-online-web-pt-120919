class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return (this.radius * 2)
    }

    set diameter(diam){
        this.radius = diam/2
    }

    
    get circumference(){
        return (this.radius * 2 * Math.PI)
    }

    set circumference(circum){
        this.radius = circum / (2 * Math.PI)
    }


    get area(){
        return (this.radius * this.radius * Math.PI)
    }

    set area(are){
        this.radius = Math.sqrt(are/Math.PI)
    }



}