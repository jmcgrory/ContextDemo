import React from 'react';
import Code from '../Code';


const ExampleUpdatableExplanation = () => {
    return (
        <section id={'UpdatableExplanation'}>
            <h2>Updatable Context Example</h2>
            <p>The above basic example has a fairly straightforward primitive type as it's contextual value. This is great for simplicity, but as can be seen in the source code, updating can only be handled at the top level component via a setState <em>(on useState)</em> call.</p>
            <p>This is nae bother; as with everything else in our React DOM we can pass down more complex objects with callbacks which will, as is a running theme, be accessible in the render props of the Consumers...</p>
            <Code>
                {`
    // Everything A Growing State Needs...
    const UpdatableUserContext = createContext<UpdatableUserContextProps>({
        setUser: (newUser) => false,
        deleteUser: () => false,
        user: null,
    });
    `}
            </Code>
            This does need to be connected to some form of state management logic <em>(as the above is simply invoking the store / outlining the interface)</em>. In the following example this has been encapsulated in a specific Provider RPC which I would want to specify as <strong>the</strong> required approach for our global state.
            <Code>
                {`
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
                `}
            </Code>
            <p>Note that we are not passing objects directly in as the provider value, as that would re-render all consumers on update as it would <em>always</em> be a new Object!</p>
            <p>Some thought to the impact of using more than one Provider and possibly having conflicting global states needs to be made.</p>
        </section>
    );
}

export default ExampleUpdatableExplanation;
