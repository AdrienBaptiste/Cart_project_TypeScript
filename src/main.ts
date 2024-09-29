import { Cart } from './services/Cart';
import { InMemoryStorage } from './services/InMemoryStorage';
import { Product } from './Entities/Product';


// On créé un stockage qui va utiliser notre classe InMemoryStorage
const stockage = new InMemoryStorage();

/* On créé un panier qui appelle notre classe Cart qui utilise 
    elle-même notre stockage créé au dessus
*/
const cart = new Cart(stockage);

/* On créé trois produits différents
*/
const baguette = new Product('Baguette', 120);
const croissant = new Product('Croissant', 423);
const pain = new Product('Pain', 835);

/* On ajoute ces trois produits au panier avec les fonctions 
    du Cart.

    On affiche ensuite le prix total du panier.
*/
cart.addProduct(baguette);
cart.addProduct(croissant);
cart.addProduct(pain);
console.log("Prix total du panier :", cart.getTotalPrice());

/* On en retire un avec les fonction du Cart

    et on réaffiche le prix total.
*/
cart.removeProduct(pain);
console.log("Prix total du panier :", cart.getTotalPrice());

/* Enfin, on reset le Cart, et on ajoute uniquement 
    1 produit.
*/
cart.resetCart();
cart.addProduct(croissant);
console.log("Prix total du panier :", cart.getTotalPrice());