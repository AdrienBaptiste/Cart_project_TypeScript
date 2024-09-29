import { Storable } from '../interfaces/Storable';
import { Productable } from '../interfaces/Productable';

export class Cart {
    private stockage: Storable<Productable>;

    constructor(stockage: Storable<Productable>) {
        this.stockage = stockage;
    }

    addProduct(product: Productable): void {
        this.stockage.set(product);
    }

    getProduct(product: Productable): Productable | undefined {
        return this.stockage.get(product.name);
    }

    getTotalPrice(): number {
        return this.stockage.total();
    }

    resetCart(): void {
        this.stockage.reset()
    }

    removeProduct(product: Productable): void {
        this.stockage.remove(product);
    }
}