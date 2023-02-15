 class Product{
    private name: string;
    private price:number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    get getname(): string {
        return this.name;
    }
    get getprice(): number {
        return this.price;
    }

    set setname(value: string) {
        this.name = value;
    }
    set setprice(value: number) {
        this.price = value;
    }
}

 class ProductManager {
    private Products = []
    constructor() {
    }

    get getAll() {
        return this.Products;
    }

    set add(product) {
        this.Products.push(product)
    }
}

let laptop1 = new Product("Laptop",10000);
let iphone1 = new Product("iphone",20000);
let productManager1 =new ProductManager()
productManager1.add = laptop1
productManager1.add = iphone1

console.log(productManager1.getAll)