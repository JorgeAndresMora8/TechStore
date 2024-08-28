import axios from "axios"
import { BACKEND_URL } from "./Config/URL";

export const MakePaymentService = async (paymentObj) => {
    
    const config = { 
        headers: { 
            'Content-Type': 'application/json', 
            'token': '12345'
        }
    }

    let response;

    //   .then(function (response) {
    //    response = true 
    //   })
    //   .catch(function (error) {
    //     response = false
    //   });

    try {
        await axios.post((BACKEND_URL + '/payment'), JSON.stringify(paymentObj), config)
        return true
    } catch (error) {
        return false
    }


}