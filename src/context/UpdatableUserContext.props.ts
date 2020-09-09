import StringObject from '../lib/StringObject.interface';

interface UpdatableUserContextProps {
    setUser: (newUser: StringObject) => boolean;
    deleteUser: () => boolean;
    user: null | StringObject,
}

export default UpdatableUserContextProps;
