import React from 'react';
import '../App.css';
// import './Servicescontent.css';
import PublicIcon from '@material-ui/icons/Public';
import SpeedIcon from '@material-ui/icons/Speed';
import DescriptionIcon from '@material-ui/icons/Description';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

function Servicescontent(){
    return (
        <div className="ServiceSection">
            <h1>Services</h1>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga enum quidem. Sit sint consectetur velt. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis comodi quidem hic quas.
            </p><br></br>
            <div className="boxes">
                <div className="box">
                    <div className="ServiceIcon-1">
                        <SportsBasketballIcon />
                    </div>
                    <h4>Lorem Ipsum</h4>
                    <p>Voluoptatum deleniti atque corrupti quos dolores et quas  molestias 
                    excepturi sint occaecati cupiditate
                    </p>
                </div>

                <div className="box">
                    <div className="ServiceIcon-2">
                        <DescriptionIcon />
                    </div>
                    <h4>Sed Ut perspiciatis</h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillium 
                    dolore eu fugiat nulla
                    </p>
                </div>

                <div className="box">
                    <div className="ServiceIcon-3">
                        <SpeedIcon />
                    </div>
                    <h4>Magni Dolores</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim
                    </p>
                </div>

                <div className="box">
                    <div className="ServiceIcon-4">
                        <PublicIcon />
                    </div>
                    <h4>Nemo Enim</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                    praesentium voluptatum
                    </p>
                </div>
            </div>
        </div>
    
               
    )
}

export default Servicescontent;