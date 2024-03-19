import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number; // Thêm thuộc tính quantity vào interface Product
}

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload; // Lấy sản phẩm được thêm vào từ action payload
      console.log('laays dduocjw san phamar')
      const existingItemIndex = state.cart.findIndex(item => item.id === newItem.id); // Tìm chỉ mục của sản phẩm trong giỏ hàng (nếu có)
      
      if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
        state.cart[existingItemIndex].quantity += 1;
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng với số lượng là 1
        state.cart.push({ ...newItem, quantity: 1 });
      }
    },
   
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent && itemPresent.quantity > 1) {
        itemPresent.quantity--;
      }
    },
    cleanCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incementQuantity,
  decrementQuantity,
  cleanCart,
} = CartSlice.actions;

export default CartSlice.reducer;
