import React from 'react';
import NavProps from './Nav.props';
import { NavItem } from '.';

const Nav = ({ items }: NavProps) => {
    return (
        <nav className="Nav">
            <ul className="NavList">{ items.map(({ ...props }) => <NavItem {...props} />) }</ul>
        </nav>
    );
}

export default Nav;
