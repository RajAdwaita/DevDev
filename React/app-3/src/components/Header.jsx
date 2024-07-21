import React from 'react';

// eslint-disable-next-line react/prop-types
const Header = React.memo(({ header }) => {
    return (
        <div>WELCOME TO {header}</div>
    );
});

Header.displayName = 'Header';

export default Header;
