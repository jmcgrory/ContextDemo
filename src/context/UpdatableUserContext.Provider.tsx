import React, { useState } from 'react';
import StringObject from '../lib/StringObject.interface';
import UpdatableUserContext from './UpdatableUserContext';
import UpdatableUserContextProps from './UpdatableUserContext.props';

const UpdatableUserContextProvider = ({ children }: { children: any }) => {
    const [ userState, setUserState ] = useState<UpdatableUserContextProps>({
        user: null, // Default would be connected to some form of global store in practice
        setUser: (newUser: StringObject) => {
            setUserState({
                ...userState,
                user: newUser,
            });
            return true;
        },
        deleteUser: () => {
            setUserState({
                ...userState,
                user: null,
            });
            return true;
        }
    });
    return (
        <UpdatableUserContext.Provider value={userState}>
            { children }
        </UpdatableUserContext.Provider>
    )
};

export default UpdatableUserContextProvider; 
