import { CartItem } from './CartItem';

export class CartBox {
    items: CartItem[];

    constructor() {
        this.items = [];
    }

    addItem(item: CartItem) {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this.items.push(item);
        }
    }

    removeItem(id: number) {
        this.items = this.items.filter(item => item.id !== id);
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}