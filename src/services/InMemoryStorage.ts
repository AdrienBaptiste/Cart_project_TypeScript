import { Product } from '../Entities/Product';

class InMemoryStorage implements Storable<Product> {
    private items: Product[] = [];
    
    set(item: Product): void {
        this.items.push(item);
    }

    get(name: string): Product | undefined {
        return this.items.find(item => item.name === name);
    }

    total(): Product[] {
        return this.items;
    }

    reset(): void {
        this.items = [];
        // this.items.splice(0, items.length);
    }

    remove(item: Product): void {
        this.items.filter(i => i !== item);
    }
}
