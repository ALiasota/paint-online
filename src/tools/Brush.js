import Tool from "./Tools";

export default class Brush extends Tool {
    constructor(canvas) {
        super(canvas)
        this.listen()
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler(this)
        this.canvas.onmousedown = this.mouseDownHandler(this)
        this.canvas.onmouseup = this.mouseUpHandler(this)
        
    }

    mouseMoveHandler(e) {
     
        if(this.mouseDown) {
            console.log(2555666)
            this.draw(e.pageX - e.canvas.offsetLeft, e.pageY - e.canvas.offsetTop)
        }
    }

    mouseUpHandler(e) {
        this.mouseDown = false
        console.log(25333355)
        console.log(this.mouseDown)
    }

    mouseDownHandler(e) {
        console.log(e.target)
        this.mouseDown = true
        // console.log(this.mouseDown)
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX - e.canvas.offsetLeft, e.pageY - e.canvas.offsetTop)
    }

    draw(x, y) {
        console.log('draw')
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
        console.log('draw')
    }

}