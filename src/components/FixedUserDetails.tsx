import React from 'react';
import { UpdatableUserContext } from '../context';

const FixedUserDetails = () => (
    <UpdatableUserContext.Consumer>
        {({ deleteUser, user }) => (
            <div className={`UserDetails ${user ? 'UserDetailsLoggedIn' : 'UserDetailsLoggedOut'}`}>
                <div className={'Column'}>
                    <img src={`${window.location.origin}/user.png`} alt={'User Profile'} />
                    <div className={'Information'}>
                        <strong>{ ( user && user.name ) || '...' }</strong> - { ( user && user.title ) || '...' }
                    </div>
                    <button onClick={deleteUser}>Log Out</button>
                </div>
            </div>
        )}
    </UpdatableUserContext.Consumer>
);

export default FixedUserDetails;
