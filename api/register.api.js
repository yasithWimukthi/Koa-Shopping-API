import { v4 as uuidv4 } from 'uuid';

const users = new Map();

users.set('1', {
  id: '1',
  name: 'John',
  email: 'test@example.com',
  password: '123456',
  type:'customer'
});

users.set('2', {
  id: '2',
  name: 'Jane',
  email: 'jane@example.com',
  password: '123456',
  type:'customer'
});

users.set('3', {
  id: '3',
  name: 'jeff',
  email: 'jeff@example.com',
  password: '123456',
  type:'trader'
});

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

export const getCustomers = () => {
    return [...users.values()];
}

