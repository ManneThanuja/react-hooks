import React from 'react'
import './Header.css'

function Header(props) {

    const { variant = 'primary', children, ...rest } = props
    return (
        <header className={`header ${variant}`} {...rest}>
            {children}
        </header>
    )
}

export default Header