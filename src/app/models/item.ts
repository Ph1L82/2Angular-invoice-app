export class Item {
  id!: number;
  product!: string;
  price!: number;
  quantity!: number;

  subtotal(): number {
    return this.price * this.quantity;
  }
}
