import { v4 as uuidv4 } from 'uuid';

const shopItems = new Map();

export const save = ({name,quantity,description,price}) => {
    const id = uuidv4();
    const shopItem = {
        id,
        name,
        quantity,
        description,
        price
    };
    shopItems.set(id,shopItem );
    return shopItem ;
};

export const getShopItems = () => {
    return [...shopItems.values()];
};

export const getShopItem = (id) => {
    return shopItems.get(id);
};

const updateShopItem = (id,shopItem) => {
    shopItems.set(id,shopItem);
};

