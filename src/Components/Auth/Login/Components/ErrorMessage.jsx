import { faCircleExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
export default function ErrorMessage({ message }){ 
    return ( 
        <>
                    <p className="errorMessageLogin"><FontAwesomeIcon icon={faCircleExclamation} /> {message}</p>
            </>
    )
}