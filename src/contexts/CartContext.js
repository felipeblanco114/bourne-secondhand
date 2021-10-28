import React, {useState, createContext, useContext} from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [cartId, setCartId] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item]);
        setCartId([...cartId, item.item.id]);
    };

    const [qBuy, setqBuy] = useState(0);

    const addCart = (qty) => {
        setqBuy (qBuy+qty);
    }

    const deleteCart = () => {
        setCart([]);
        setCartId([]);
        setqBuy(0);
    }
    const deleteItem = (id) => {
        let item = cart.find(item => item.item.id === id);
        let index = cart.indexOf(item);
        cart.splice(index,1);
        cartId.splice(index,1);
        setqBuy (qBuy-item.cantidad)
        setCart([...cart]);
        setCartId([...cartId]);
      }
    return (
        <>
          <CartContext.Provider value = {{cart, addItem, deleteCart, addCart, qBuy, deleteItem, cartId, setCartId }}>
            {children}
          </CartContext.Provider>
        </>
    );
}

export default CartContextProvider;