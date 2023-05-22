const Article1 = class {
  constructor(id, quantity, price) {
    this.id = id;
    this.quantity = quantity;
    this.price = price;
  }
}

export default Article1

export const Article = (id, quantity, price, image) => {
  return {
    id,
    quantity,
    price,
    image
  }
}