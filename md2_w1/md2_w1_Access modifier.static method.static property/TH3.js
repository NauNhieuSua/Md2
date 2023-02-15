var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Object.defineProperty(Product.prototype, "getname", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getprice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setname", {
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setprice", {
        set: function (value) {
            this.price = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.Products = [];
    }
    Object.defineProperty(ProductManager.prototype, "getAll", {
        get: function () {
            return this.Products;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductManager.prototype, "add", {
        set: function (product) {
            this.Products.push(product);
        },
        enumerable: false,
        configurable: true
    });
    return ProductManager;
}());
var laptop1 = new Product("Laptop", 10000);
var iphone1 = new Product("iphone", 20000);
var productManager1 = new ProductManager();
productManager1.add = laptop1;
productManager1.add = iphone1;
console.log(productManager1.getAll);
