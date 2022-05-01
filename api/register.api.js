import { v4 as uuidv4 } from 'uuid';

const users = new Map();

export const save = ({name,email,password,type}) => {
    const id = uuidv4();
    const user = {
        id,
        name,
        email,
        password,
        type
    };
    users.set(id,user);
    return user;
};

