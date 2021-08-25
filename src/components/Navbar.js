import React,{useState} from 'react';
import {Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import './Navbar.css';
import '../App.css';
import {Button} from '@material-ui/core'
import ReorderIcon from '@material-ui/icons/Reorder';




function Navbar() {

  
    
    const [showLinks, setShowLinks] = useState(false);
    return (
      <div className="Navbar">
        <div className="leftSide">
             <div className="Logo">
                 <h1>HCL</h1>
             </div>
           </div>
           <div className="rightSide">
             <div className="Links" id={showLinks ? "hidden" : ""}>
              {/* <Link to='/Home'>Home</Link>
              <Link to='/About'>About Us</Link>
              <Link to='/Services'>Services</Link>  
              <Link to='/#'>Portfolio</Link>
              <Link to='/Team'>Team</Link>
              <Link to='/#'>Drop down</Link>
              <Link to='/Contact'>Contact</Link> */}
              <a href="/Home">Home</a>  
              <a href="/About">About us</a>
              <a href="/Services">Services</a>
              <a href="#">Portfolio</a>
              <a href="/Team">Team</a>
              <a href="#">Drop down</a>
              <a href="/Contact">Contact Us</a>

              </div>
              <button onClick={()=> setShowLinks(!showLinks)}>
                {" "}
                <ReorderIcon />
                </button>
           </div>
         
     </div>
    );
}
         


export default Navbar;