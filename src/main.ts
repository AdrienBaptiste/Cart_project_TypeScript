import { Cart } from './services/Cart';
import { InMemoryStorage } from './services/InMemoryStorage';
import { Product } from './Entities/Product';

const stockage = new InMemoryStorage();

const cart = new Cart(stockage);

const baguette = new Product('Baguette', 120);
const croissant = new Product('Croissant', 423);
const pain = new Product('Pain', 835);

cart.addProduct(baguette);
cart.addProduct(croissant);
cart.addProduct(pain);
console.log("Prix total du panier :", cart.getTotalPrice());

cart.removeProduct(pain);
console.log("Prix total du panier :", cart.getTotalPrice());

cart.resetCart();
cart.addProduct(croissant);
console.log("Prix total du panier :", cart.getTotalPrice());