const inventory = [
    {type:   "machine", value: 5},
    {type:   "machine", value:  6},
    {type:      "duck", value:   10},
    {type: "furniture", value: 12},
    {type:   "machine", value:   7},
]
 let totalmachine = inventory.filter(function (a){
    return a.type == "machine"
}).reduce((a,b) => a+b.value,0)
console.log(totalmachine)