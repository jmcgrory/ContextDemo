import { createContext } from 'react';
import UpdatableUserContextProps from './UpdatableUserContext.props';

const UpdatableUserContext = createContext<UpdatableUserContextProps>({
    setUser: (newUser) => false,
    deleteUser: () => false,
    user: null,
});

export default UpdatableUserContext;
