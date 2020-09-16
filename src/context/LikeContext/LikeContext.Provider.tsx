import React from 'react';
import { usePersistentState } from '../../hooks';
import LikeContext from './LikeContext';

const LikeContextProvider = ({ children }: { children: any }) => {
    const [ likeState, setLikeState ] = usePersistentState('Like', 0);
    return (
        <LikeContext.Provider {...{ value: {
            value: parseInt(`${likeState}`),
            increment: () => setLikeState(likeState + 1),
            clear: () => setLikeState(0),
        }}}>
            { children }
        </LikeContext.Provider>
    );
}

export default LikeContextProvider;
