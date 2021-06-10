import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {!props.isauthenticated ? null : <NavigationItem link="/orders">Orders</NavigationItem>}
        {!props.isauthenticated ?
            <NavigationItem link="/auth">Authentication</NavigationItem> :
            <NavigationItem link="/Logout">Logout</NavigationItem>
        }
    </ul>
);

export default navigationItems;