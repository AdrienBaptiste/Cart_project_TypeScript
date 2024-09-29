export interface Storable<T> {
    set: (item: T) => void;
    get: (name: string) => T | undefined;
    total: () => number;
    reset: () => void 
    remove: (item: T) => void;
}