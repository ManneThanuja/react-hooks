import React from 'react';
import '../App.css';

// import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';
import CollectionsIcon from '@material-ui/icons/Collections';
import DescriptionIcon from '@material-ui/icons/Description';

// import  '../images/about-img.jpg' ;


function Aboutcontent(){
    return (
        <div className="Aboutsection">
            <div className="leftSide">
                <img src ={"./images/about-img.jpg"} />

            </div>
            <div className="rightSide">
                <h1>Voluptatem dignissimos provident</h1>
                <p>Lorrem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod
                    tempor incididunt ut labore magna aliqua.
                </p>
                <div className="table">
                    <div className="leftSection">
                        <DescriptionIcon />
                    </div>
                    <div className="rightSection">
                        <h2>Corporis voluptates Sit</h2>
                        <p>Consequntur sunt aut quasi enem aliquam quae haum pariatur
                        laboris nisi ut aliquip.
                        </p>
                    </div>
                </div>
                <div className="table">
                    <div className="leftSection">
                    <CollectionsIcon />
                    </div>
                    <div className="rightSection">
                        <h2>Ullamco loboris Nisi</h2>
                        <p>Excpeteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deseunt.
                        </p>
                    </div>
                </div>
                <div className="table">
                    <div className="leftSection">
                    <CollectionsIcon />
                    </div>
                    <div className="rightSection">
                        <h2>Ullamco loboris Nisi</h2>
                        <p>Excpeteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deseunt.
                        </p>
                    </div>
                </div>
    
            </div>
            {/* <div className="uparrow">
            <ArrowDropUpRoundedIcon />
            </div> */}
        </div>
       
               
    )
}

export default Aboutcontent;