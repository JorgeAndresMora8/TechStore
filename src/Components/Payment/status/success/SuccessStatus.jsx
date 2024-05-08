import { Link } from "react-router-dom";

export default function SuccessStatus(){ 


    return ( 
        <div className="status-container">
            <div className="status-item">
                <div className="status-image"></div>
                <b className="status-success-title">Excellent</b>
                <p className="status-info-text">The transaction was completed and <br /> the products are on its way.</p>
                <Link to={'/'}>continue</Link>
                <p className="problem-flag">If you have any problem, please contact our team</p>
            </div>
        </div>
    )
}