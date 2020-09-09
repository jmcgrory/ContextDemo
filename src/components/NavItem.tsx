import React from 'react';
import NavItemProps from './NavItem.props';

const NavItem = ({ href, text, title }: NavItemProps) => {
    return (
        <li>
            <a {...{ href: href, title: title }}>
                { text }
            </a>
        </li>
    );
}

export default NavItem;
