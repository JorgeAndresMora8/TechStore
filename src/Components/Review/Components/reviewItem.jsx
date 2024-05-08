import { faUserLarge } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ReviewItem({ review }){ 

    console.log(review)
    return ( 
        <div className="review-item">
                    <div className="review-item-header">
                        <FontAwesomeIcon style={{color: "darkblue"}} className="fa-2x" icon={faUserLarge} />
                        <div>
                        <p className="review-item-user">{review.userId}</p>
                        <span className="review-item-role">TechStore Client</span>
                        </div>
                    </div>
                    <div className="review-item-body">
                        <p>{review.comment}.</p>
                    </div>
                    <div className="review-item-footer">
                        <img src='/fullStar.png' style={{width: "80px"}} />
                    </div>

                </div>
    )
}