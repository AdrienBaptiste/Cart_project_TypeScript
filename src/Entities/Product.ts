import { Productable } from "../interfaces/Productable";

export class Product implements Productable {
    constructor(public name: string, public price: number) {}
}