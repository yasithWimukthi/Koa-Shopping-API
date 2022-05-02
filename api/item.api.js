import { v4 as uuidv4 } from 'uuid';

const shopItems = new Map();

shopItems.set('1', {
  id: '1',
  name: 'Item 1',
  price: 10,
  description: 'Item 1 description',
  quantity: 10,
  promotionPrice: 0,
});

shopItems.set('2', {
  id: '2',
  name: 'Item 2',
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
    shopItems.set(id,shopItem );
    return shopItem ;
};

export const getShopItems = () => {
    return [...shopItems.values()];
};

export const getShopItem = (id) => {
    return shopItems.get(id);
};

export const updateShopItem = (id,{name,quantity,description,price,promotionPrice}) => {
    const shopItem = {
        id,
        name,
        quantity,
        description,
        price,
        promotionPrice
    };
    shopItems.set(id,shopItem);
};

