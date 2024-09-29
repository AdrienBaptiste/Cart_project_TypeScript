import { Storable } from '../interfaces/Storable';
import { Productable } from '../interfaces/Productable';

export class Cart {
/* On définit le stockage comme étant de type Storable
    pour stocker des objets de type Productable
*/
    private stockage: Storable<Productable>;

    constructor(stockage: Storable<Productable>) {
        this.stockage = stockage;
    }

/* Fonction addProduct qui utilise la fonction set() de 
    InMemoryStorage
*/
    addProduct(product: Productable): void {
        this.stockage.set(product);
    }

/* Fonction getTotalPrice qui utilise la fonction total() de 
    InMemoryStorage
*/
    getTotalPrice(): number {
        return this.stockage.total();
    }

/* Fonction resetCart qui utilise la fonction reset() de 
    InMemoryStorage
*/
    resetCart(): void {
        this.stockage.reset()
    }

/* Fonction removeProduct qui utilise la fonction remove() de 
    InMemoryStorage
*/
    removeProduct(product: Productable): void {
        this.stockage.remove(product);
    }
}