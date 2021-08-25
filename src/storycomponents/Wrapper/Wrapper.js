import React from 'react';
import './Wrapper.css';

function Wrapper(props) {

    const { size = 'wrap', ...rest }= props
    return (
        // <div className='Navbar'>
        // <wrapper className={'wrapper ${size}'} {...rest}>
         <wrapper  className={'wrapper ${size}'} {...rest}> 

        </wrapper>
        // </div>
    )
    
}

export default Wrapper