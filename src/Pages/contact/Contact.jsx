import { faEarthAmerica, faEnvelope, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Contact(){ 
    return ( 
        <div className="whole-container">
        <div className="boxContainer">
            <div className="home-header">
                <div className="home-header-text-area">
                    <b>Lets Get <span className="title-highligh">In Touch</span></b>
                    <p><span className="highlight">"Questions? Feedback?</span> We're here. Reach out and let's make your experience with us <span className="highlight">exceptional!</span> </p>

                    <p><FontAwesomeIcon className="contact-icon" icon={faEnvelope} /> tech.store@gmail.com</p>
                    <p><FontAwesomeIcon className="contact-icon" icon={faPhone} /> +54 9 11 1234 5678.</p>
                    <p><FontAwesomeIcon className="contact-icon" icon={faEarthAmerica} /> Buenos Aires, Argentina</p>
                    <button><Link to={'/store'}>go to store</Link></button>
                </div>
                <div className="home-header-image-area">
                    <img src="./ContactImg.png" style={{width: '100%'}}/>
                </div>
            </div>
            </div>
            </div>
    )
}