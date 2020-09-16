import React from 'react';
import LikeContext from '../../context/LikeContext/LikeContext';
import Code from '../Code';

const ExampleCustomHook = () => {
    return (
        <section id="ExampleCustomHook">
            <LikeContext.Consumer>
                {({ value, clear }) => (
                    <h2>
                        Custom Hook Example 
                        <span aria-label={'Likes Count'} {...{
                            className: [ 'Likes', ( value ? 'Likes-Some' : 'Likes-None' ) ].join(' '),
                            role: "img",
                            onClick: clear,
                        }}><span>{ value }</span> 👍 </span>
                    </h2>
                )}
            </LikeContext.Consumer>
            <p><strong>useState</strong> and <strong>useContext</strong> are built in React hooks, we can create our own hooks by following their same pattern, i.e.</p>
            <Code>
                {`
const useSomething = (args) => {
    // Our Logic / State Management / Lifecycles
    // Usually Extending Other Hooks Behaviours
    return [ something, setSomething ];
}
const [ something, setSomething ] = useSomething('something old', 'something new');
                `}
            </Code>
            <p>As you can see this is deliberately fairly synonymous with other hooks, below is an example used within this application to persist data in local storage.</p>
            <Code>
                {`
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

// Consumed As Such
const [ likeState, setLikeState ] = usePersistentState('Like', 0);
                `}
            </Code>
            <p>This allows the below <strong>Like</strong> button to store the amount of "likes" this feature has, give it a smash.</p>
            <LikeContext.Consumer>
                {({ increment }) => (
                    <button {...{ onClick: increment }}>
                        <span role='img' aria-label='Thumbs Up'>👍 </span>
                    </button>
                )}
            </LikeContext.Consumer>
        </section>
    );
}

export default ExampleCustomHook;
