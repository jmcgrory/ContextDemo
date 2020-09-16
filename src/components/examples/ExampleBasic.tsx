import React from 'react';
import Code from '../Code';

const ExampleBasic = ({ isTiny, setTiny }: { isTiny: boolean, setTiny: (v: boolean) => void }) => {
    return (
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
    );
}

export default ExampleBasic;
