import React from 'react';
import '../App.css';
// import './Teamcontent.css';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import '../images/testimonials-1.jpg'

function Teamcontent(){
    return (
        <div className="TeamSection">
            <h1>Testimonials</h1>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga enum quidem. Sit sint consectetur velt. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis comodi quidem hic quas.
            </p>
            <div className="Teamdetails">
                <div className="TeamMember">
                    <p><FormatQuoteRoundedIcon />Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
                        rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.
                    
                    Maecen aliquam, risus at semper.<FormatQuoteRoundedIcon /></p>
                    <img src="../images/testimonials-1.jpg" />
                    <br></br>
                    <h3>Saul Goodman</h3>
                    <br></br><br></br>
                    <h6>CEO & Foundation</h6>
                </div>

                <div className="TeamMember">
                    <p><FormatQuoteRoundedIcon />Export tempor illum tamen malis mails eram quae irure esse labore quem cillum quid 
                        cillum eram malis quorum velit fore eram velim sunt aliqua noster
                    fugiat irure amet legam anim culpa.<FormatQuoteRoundedIcon /></p>
                    <img src="./images/testimonials-2.jpg"/>
                    <br></br>
                    <h3>Sara Wilson</h3>
                    <br></br><br></br>
                    <h6>Designer</h6>
                </div>

                <div className="TeamMember">
                    <p><FormatQuoteRoundedIcon />Enum nisi quem export duis labore cillum quae magna enim sint quorum nulla quem
                         veniam duis minim tempor labore quem eram duis noster aute amet 
                    
                    eram fore quis sint minim.<FormatQuoteRoundedIcon /></p>
                    <img src="./images/testimonials-3.jpg"/>
                    <br></br>
                    <h3>Jena Karlis</h3>
                    <br></br><br></br>
                    <h6>Store Owner</h6>
                </div>
            </div>
        </div>
        
    
               
    )
}

export default Teamcontent;