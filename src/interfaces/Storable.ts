export interface Storable<T> {
    set: (item: T) => void;
    total: () => number;
    reset: () => void 
    remove: (item: T) => void;
}

/* On créé l'interface storable qui va définir si le produit qui 
    est donné peut être stocké. 
*/