export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0, qty = 0, imageUrl = 'https://www.cdiscount.com/pdt2/9/7/0/1/700x700/889698266970/rw/figurine-funko-pop-split-hedwig.jpg'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.qty = qty
        this.imageUrl = imageUrl
    }
}