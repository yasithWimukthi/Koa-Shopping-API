import { v4 as uuidv4 } from 'uuid';
const cartItems = new Map();

cartItems.set('1', {
    id: '1',
    name: 'Item 1',
    price: 10,
    description: 'Item 1 description',
    quantity: 1,
    promotionPrice: 10,
});

cartItems.set('2', {
    id: '2',
    name: 'Item 2',
    price: 20,
    description: 'Item 2 description',
    quantity: 1,
    promotionPrice: 15,
});
cartItems.set('3', {
    id: '3',
    name: 'Item 2',
    price: 20,
    description: 'Item 2 description',
    quantity: 1,
    promotionPrice: 15,
});

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
