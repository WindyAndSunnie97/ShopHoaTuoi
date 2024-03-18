import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  _id: string;
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
      const newItem = action.payload;
      const existingItem = state.cart.find(item => item._id === newItem._id);
      if (existingItem) {
        // If the product already exists in the cart, increase its quantity by 1
        existingItem.quantity += 1;
      } else {
        // If the product doesn't exist in the cart, add it with a quantity of 1
        state.cart.push({ ...newItem, quantity: 1 });
      }
    },
   
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload.id);
    },
    incementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const itemPresent = state.cart.find(
        (item) => item._id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const itemPresent = state.cart.find(
        (item) => item._id === action.payload.id
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
