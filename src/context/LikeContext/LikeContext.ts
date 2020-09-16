import { createContext } from 'react';
import LikeContextProps from './LikeContext.props';

const LikeContext = createContext<LikeContextProps>({
    value: 0,
    increment: () => 0,
    clear: () => false,
});

export default LikeContext;
