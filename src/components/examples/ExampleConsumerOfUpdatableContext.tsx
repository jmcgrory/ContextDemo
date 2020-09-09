import React, { useState, ChangeEvent } from 'react';
import { UpdatableUserContext } from '../../context';
import StringObject from '../../lib/StringObject.interface';

const ExampleConsumerOfUpdatableContext = () => {
    const blankUser = { user_name: '', user_title: '' };
    const [ userDetails, setUserDetails ] = useState<StringObject>(blankUser);
    const setUserDetail = ({ currentTarget }: ChangeEvent) => {
        if (currentTarget) {
            const target = currentTarget as HTMLInputElement;
            setUserDetails({
                ...userDetails,
                [target.name]: target.value
            })
        }
    }
    return (
        <section id="UpdatableExample">
            <h2>User Example In Action</h2>
            <p>The below form will allow the updating and deleting of global User data. There is also a fixed User navigation which will appear when a User exists that will appear, this consumes a separate <strong>UpdatableUserContext.Consumer</strong>, and also uses a passed down method to inversely allow logging out.</p>
            <p>Local form state is still maintained locally within the Component for the sake of buffering data before submitting to the global Context.</p>
            <p>I am sure this could be done 1:1 directly to the Context state (i.e. as you type), but there's likely performance considerations to live updating global state.</p>
            <UpdatableUserContext.Consumer>
                {({ setUser, user = {} }) => (
                    <form>
                        <div className={'FormGroup'}>
                            <label>
                                <h3>User Name</h3>
                                <input {...{
                                    name: 'user_name',
                                    value: userDetails.user_name,
                                    placeholder: 'Username',
                                    onChange: setUserDetail
                                }} />
                            </label>
                            <label>
                                <h3>Job Title</h3>
                                <input {...{
                                    name: 'user_title',
                                    value: userDetails.user_title,
                                    placeholder: 'Job Title',
                                    onChange: setUserDetail
                                }} />
                            </label>
                        </div>
                        <div className={'FormGroup'}>
                            <label>
                                <button {...{
                                    onClick: (event) => {
                                        event.preventDefault();
                                        const { user_name, user_title } = userDetails;
                                        if (user_name && user_title) {
                                            setUser({
                                                name: user_name,
                                                title: user_title
                                            });
                                            setUserDetails(blankUser);
                                        } else {
                                            window.alert('User details are insufficient.');
                                            return false;
                                        }
                                    }
                                }}>Log In Button</button>
                            </label>
                        </div>
                    </form>
                )}
            </UpdatableUserContext.Consumer>
        </section>
    );
}

export default ExampleConsumerOfUpdatableContext;
