import { v4 as uuidv4 } from 'uuid';

const payments = new Map();

export const save = ({name,cartItems,total}) => {
    const id = uuidv4();
    const shopItem = {
        id,
        name,
        cartItems,
        total,

    };
    payments.set(id,shopItem );
    return shopItem ;
};