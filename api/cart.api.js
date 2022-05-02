import { v4 as uuidv4 } from 'uuid';
const cartItems = new Map();

export const save = ({id,name,quantity,description,price,promotionPrice}) => {
    const cartId = uuidv4();
    const shopItem = {
        id,
        name,
        quantity,
        description,
        price,
        promotionPrice
    };
    cartItems.set(cartId,shopItem );
    return shopItem ;
};

export const getCartItems = () => {
    return [...cartItems.values()];
};
