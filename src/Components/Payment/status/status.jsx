import { useLocation } from "react-router-dom";
// import ErrorStatus from "./error/ErrorStatus";
import SuccessStatus from "./success/SuccessStatus";

export default function PaymentStatus(){ 

    const location = useLocation();
    const receivedData = location.state;
    console.log(receivedData)

    return ( 
        <div>
            <SuccessStatus />
            {/* <ErrorStatus /> */}
        </div>
    )
}