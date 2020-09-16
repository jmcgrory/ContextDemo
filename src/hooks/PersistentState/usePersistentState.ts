import { useState, useEffect } from 'react';
import StringObject from '../../lib/StringObject.interface';

const usePersistedState = (key: string, defaultValue: StringObject) => {
    const [ state, setState ] = useState(() => {
        const persistedState = window.localStorage.getItem(key);
        return persistedState ? JSON.parse(persistedState) : defaultValue;
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [ state, setState ];
}

export default usePersistedState;
