import React, { useState } from 'react';
import { Nav, FixedUserDetails } from './components';
import { TinyModeContext } from './context';
import {
    ExampleBasic,
    ExampleConsumerOfTinyContext,
    ExampleConsumerOfUpdatableContext,
    ExampleOverview,
    ExampleUpdatableExplanation,
} from './components/examples';
import UpdatableUserContextProvider from './context/UpdatableUserContext.Provider';
import './App.scss';

interface AppProps {}

const App = (props:AppProps) => {
    const [ isTiny, setTiny ] = useState(false);
    const navItems = [
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
    ];
    return (
        <UpdatableUserContextProvider>
            <FixedUserDetails />
            <div className="App">
                <Nav {...{ items: navItems }} />
                <article>
                    <header className="App-header">
                        <h1>Context & Hooks</h1>
                    </header>
                    <ExampleOverview />
                    <ExampleBasic {...{ isTiny: isTiny, setTiny: setTiny }} />
                    <TinyModeContext.Provider value={isTiny}>
                        <ExampleConsumerOfTinyContext />
                    </TinyModeContext.Provider>
                    <ExampleUpdatableExplanation />
                    <ExampleConsumerOfUpdatableContext />
                </article>
            </div>
        </UpdatableUserContextProvider>
    );
}

export default App;
