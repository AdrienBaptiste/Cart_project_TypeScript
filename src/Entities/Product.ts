import { Productable } from "../interfaces/Productable";

/* On créé la classe Product qui doit respecter 
    l'interface productable.
*/
export class Product implements Productable {
    constructor(public name: string, public price: number) {}
}
