class Rectangle{
    constructor(height, width){
        this.height = height
        this.width = width
    }
    get area(){
        return this.height * this.width
        //or return this.calArea()
    }

    // calcArea() {
    //     return this.height * this.width
    // }

}

const square = new Rectangle(10, 10)

console.log(square.area)

