function detectCollision(objects, point) {
    let fliterObj =  objects.filter(a=>{
        return a.x<= point.x && a.x + a.width>= point.x &&
        a.y<=point.y && a.y + a.height >=point.y
    })
    console.log(fliterObj)
}
const myObjects = [
    {x:  10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x:   0, y:  0, width: 10, height:  5}
]
detectCollision(myObjects, {x: 4, y: 2})
