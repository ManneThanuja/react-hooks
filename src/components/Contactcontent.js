import React from 'react';
import '../App.css';
// import './Contactcontent.css';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';


function Contactcontent(){
    return (
        <div className="ContactSection">
            <h1>Contacts</h1>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga enum quidem. Sit sint consectetur velt. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis comodi quidem hic quas.
            </p>
            <div className="Contactdetails">
                <div className="Contactinfo">
                    <div className="contactTable">
                        <div className="lefticon">
                            <RoomIcon />
                        </div>
                        <div className="right-info">
                            <h3>Location</h3>
                            <p>Ongole,A.P,523001</p>
                        </div>
                    </div>

                    <div className="contactTable">
                        <div className="lefticon">
                            <EmailIcon />
                        </div>
                        <div className="right-info">
                            <h3>Email</h3>
                            <p>info@gmail.com</p>
                        </div>
                    </div>

                    <div className="contactTable">
                        <div className="lefticon">
                            <CallIcon />
                        </div>
                        <div className="right-info">
                            <h3>Call</h3>
                            <p>9000000000</p>
                        </div>
                    </div>
                </div>
                <div className="Contactinfo">
                    <p>hus nciu  sriurenc  heuefnjew nfuewh fuen</p>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61512.719946343015!2d79.99651824937541!3d15.508887686643401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b011c10366c03%3A0x6ee40296fd2dbcc5!2sOngole%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1613395579834!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" 
                allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
                </div>
            </div>
        </div>
               
    )
}

export default Contactcontent;