import React from 'react';
import '../App.css';
// import { Button } from './Button';
// import './Herosection.css';
// import { Button } from '@material-ui/core';
import Button from '../storycomponents/Button/Button'

function Herosection(){
    return (
        <div className="Hero-container">
            {/* <img src="./images/hero-bg.jpg"/> */}
                        <div className="Hero-details">
                            <h1>Welcome to HCL</h1>
                            <p>we are team of talented designers making websites with React.</p>
                            <Button>GET STARTED</Button>
                            {/* alekya is brainless fellow */}
                            {/* <button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</button> */}
                        </div>
                    </div>
    );
}

export default Herosection;