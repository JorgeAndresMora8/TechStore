import { faMessage, faStar } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef } from "react"

export default function ReviewForm(){
    

    const ratingRef = useRef()
    const commentRef = useRef()

    function HandleSubmit(e){ 

        const ratingValue = ratingRef.current.value
        const commentValue = commentRef.current.value

        e.preventDefault()

        console.log(ratingValue, commentValue)
    }


    return( 
        <div className="review-container">
        <div className="review-form-container">
            <form className="review-form">
                <div className="form-item">
                    <label>Message</label>
                    <div style= {{width: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <input className="review-form-input" placeholder="enter your message" name="message"/>
                    <FontAwesomeIcon icon={faMessage } className="form-review-icon"/>
                    </div>
                </div>
                <div className="form-item">
                <label>Rating</label>
                <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '10px'}}>
                    <select className="select-option-review-form">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <FontAwesomeIcon icon={faStar } className="form-review-icon"/>
                    </div>
                </div>
                <button className="btn-review-form" onClick={HandleSubmit} >save</button>

            </form>
        </div>
        </div>
    )
}