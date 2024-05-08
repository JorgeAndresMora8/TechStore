import axios from "axios"

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
        await axios.post('https://techstorebackend-1sdx.onrender.com/payment', JSON.stringify(paymentObj), config)
        return true
    } catch (error) {
        return false
    }


}