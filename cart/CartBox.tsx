// import { CartItem } from './CartItem';

// export class CartBox {
//     [id: string]: any;
//     increaseQuantity(id: number) {
//         throw new Error('Method not implemented.');
//     }
//     items: CartItem[];

//     constructor() {
//         this.items = [];
//     }

//     addItem(item: CartItem) {
//         const existingItem = this.items.find(i => i.id === item.id);
//         if (existingItem) {
//             existingItem.quantity += item.quantity;
//         } else {
//             this.items.push(item);
//         }
//     }

//     removeItem(id: number) {
//         this.items = this.items.filter(item => item.id !== id);
//     }

//     getTotal(): number {
//         return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
//     }
// }
import { CartItem } from './CartItem';

export class CartBox {
    [x: string]: any;
    items: CartItem[];

    constructor() {
        this.items = [];
    }
 

    // Thêm một mục vào giỏ hàng
    addItem(item: CartItem) {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this.items.push(item);
        }
    }

    // Xóa một mục khỏi giỏ hàng dựa trên id
    removeItem(id: string) {
        this.items = this.items.filter(item => item.id !== id);
    }

    // Tăng số lượng của một mục trong giỏ hàng
    increaseQuantity(id: string) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            item.quantity += 1;
        } else {
            throw new Error(`Không tìm thấy mục có id ${id} trong giỏ hàng.`);
        }
    }

    // Tính tổng số tiền của các mục trong giỏ hàng
    getTotal(): number {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}
