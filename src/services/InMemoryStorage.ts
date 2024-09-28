import { Productable } from '../interfaces/Productable';

export class InMemoryStorage implements Storable<Productable> {
    private items: Productable[] = [];
    
    set(item: Productable): void {
        this.items.push(item);
    }

    get(name: string): Productable | undefined {
        return this.items.find(item => item.name === name);
    }

    total(): Productable[] {
        return this.items;
    }

    reset(): void {
        this.items = [];
        // this.items.splice(0, items.length);
    }

    remove(item: Productable): void {
        this.items.filter(i => i !== item);
    }
}
