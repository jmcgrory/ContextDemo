import React, { useState } from 'react';
import { Code, Nav, FixedUserDetails } from './components';
import { TinyModeContext } from './context';
import { ExampleConsumerOfTinyContext, ExampleConsumerOfUpdatableContext } from './components/examples';
import UpdatableUserContextProvider from './context/UpdatableUserContext.Provider';
import './App.scss';

interface AppProps {}

const App = (props:AppProps) => {
    const [ isTiny, setTiny ] = useState(false);
    return (
        <UpdatableUserContextProvider>
            <FixedUserDetails />
            <div className="App">
                <Nav {...{
                    items: [
                        {
                            key: 0,
                            text: 'Overview',
                            href: '#Overview',
                            title: 'View Context Research Document Overview'
                        },
                        {
                            key: 1,
                            text: 'Basic Example',
                            href: '#BasicExample',
                            title: 'View Basic Example'
                        },
                        {
                            key: 2,
                            text: 'Tiny Mode',
                            href: '#TinyMode',
                            title: 'View TinyMode Example'
                        },
                        {
                            key: 3,
                            text: 'Updating Context',
                            href: '#UpdatableExplanation',
                            title: 'View Updating Context Information'
                        },
                        {
                            key: 4,
                            text: 'Updatable Example',
                            href: '#UpdatableExample',
                            title: 'View Updatable Example'
                        },
                    ]
                }} />
                <article>
                    <header className="App-header">
                        <h1>Context Research</h1>
                    </header>
                    <section id="Overview">
                        <h2>Overview</h2>
                        <p>This document serves to introduce and explore the intricacies of <a {...{ target: '_blank', href: 'https://reactjs.org/docs/context.html', title: 'View Context React Documentation' }}>React Context</a>, which is seemingly a State sharing layer within applications somewhat akin to <a {...{ href: 'https://redux.js.org/basics/usage-with-react', title: 'View React Redux Docs', target: '_blank' }}>Redux</a>.</p>
                        <q>
                            Context is designed to <strong>share data that can be considered “global” for a tree of React components</strong>, such as the current authenticated user, theme, or preferred language.
                        </q>
                        <p>This document will explore the use cases and implementation of Context in a modern React application.</p>
                    </section>
                    <section id="BasicExample">
                        <h2>Basic Example</h2>
                        <p>The below example shows basic creation and passing of this global state.</p>
                        <Code>
    {`
    // Specify Context (Likely Outside Root Provider)
    const TinyModeContext = React.createContext(false);
    // Add Provider To Pass Data To ALL React Tree Below
    <TinyModeContext.Provider {...{ value: false }}>
        <SomeComponent />
    </TinyModeContext.Provider>
    `}
                        </Code>
                        <p>And now an example of the above being consumed.</p>
                        <Code>
    {`
    // This Component Is Much Further Down In The Tree
    const SomeComponentsGrandChild = ({ noRelevantProps }) => (
        // Add Provider To Pass Data To ALL React Tree Below
        <TinyModeContext.Consumer>
            {(isTinyMode) => isTinyMode ? <SmallText>Wicked Wicked</SmallText> : <BigText>JUNGLE IS MASSIVE</BigText> }
        </TinyModeContext.Provider>
    );
    `}
                        </Code>
                        <p>Note; the <strong>Class</strong> consumption of Context would typically statically attach the Context to the Component class... with my focus on the functional components and compositional data structures however I would much prefer the above "render props" approach.</p>
                        <button {...{ onClick: () => setTiny(!isTiny) }}>Toggle Tiny</button>
                    </section>
                    <TinyModeContext.Provider value={isTiny}>
                        <ExampleConsumerOfTinyContext />
                    </TinyModeContext.Provider>
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
                    <ExampleConsumerOfUpdatableContext />
                </article>
            </div>
        </UpdatableUserContextProvider>
    );
}

export default App;
