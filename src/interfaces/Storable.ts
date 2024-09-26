interface Storable<T> {
    set: (item: T) => void;
    get: (name: string) => T | undefined;
    total: () => T[];
    reset: () => void 
    remove: (item: T) => void;
}