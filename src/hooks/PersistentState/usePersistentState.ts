import { useState, useEffect } from 'react';

const usePersistedState = (key: string, defaultValue: number) => {
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
