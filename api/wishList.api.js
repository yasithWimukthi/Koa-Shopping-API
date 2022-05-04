import { v4 as uuidv4 } from 'uuid';

const wishList = new Map();

wishList.set('1', {
    id: '1',
    name: 'Item 10',
    price: 10,
    description: 'Item 1 description',
    quantity: 10,
    promotionPrice: 0,
});

wishList.set('2', {
    id: '2',
    name: 'Item 20',
    price: 20,
    description: 'Item 2 description',
    quantity: 20,
    promotionPrice: 15,
});

export const save = ({name,quantity,description,price}) => {
    const id = uuidv4();
    const shopItem = {
        id,
        name,
        quantity,
        description,
        price
    };
    wishList.set(id,shopItem );
    return shopItem ;
};

export const getWishList = () => {
    return [...wishList.values()];
};
