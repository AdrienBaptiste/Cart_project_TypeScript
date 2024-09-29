import { Storable } from '../interfaces/Storable';
import { Productable } from '../interfaces/Productable';

export class InMemoryStorage implements Storable<Productable> {
    private items: Productable[] = [];
    
    set(item: Productable): void {
        this.items.push(item);
    }

    get(name: string): Productable | undefined {
        return this.items.find(item => item.name === name);
    }
    
    total(): number {
        return this.items.reduce((sum, product) => sum + product.price, 0);
    }

    reset(): void {
        this.items = [];
        // this.items.splice(0, items.length);
    }

    remove(item: Productable): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}
