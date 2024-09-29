import { Storable } from '../interfaces/Storable';
import { Productable } from '../interfaces/Productable';

export class InMemoryStorage implements Storable<Productable> {
/* On créé l'array "items" de type array de productable
*/
    private items: Productable[] = [];

/* On créé la fonction set() à qui on doit donner un item
    de type Productable pour mettre un produit dans
    le tableau
*/
    set(item: Productable): void {
        this.items.push(item);
    }

/* On créé la fonction total() qui renvoie un argument 
    de type number qui calcule le total des prix des 
    produits du Cart
*/
    total(): number {
        return this.items.reduce((sum, product) => sum + product.price, 0);
    }

/* On créé la fonction reset() qui redéfinit le tableau
    en un tableau vide.

    On peut aussi utiliser splice qui va retirer chaque
    item 1 par 1. 
*/
    reset(): void {
        this.items = [];
        // this.items.splice(0, items.length);
    }

/* On créé la fonction remove() qui créé un objet qui prends
    la valeur de l'index de l'objet donné à la fonction.
    Ensuite on retire 1 item depuis l'index de l'objet donné.
*/
    remove(item: Productable): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}
