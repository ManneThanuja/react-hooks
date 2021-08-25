import React from 'react';
import './Navbar.css';

function Navbar(props) {

    const { size = 'nav', ...rest }= props
    return (
        // <div className='Navbar'>
        <navbar className={'navbar ${size}'} {...rest}>
            
        </navbar>
        // </div>
    )
    
}

export default Navbar