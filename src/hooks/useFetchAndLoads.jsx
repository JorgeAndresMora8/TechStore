import { useState, useEffect } from "react"


const useFetchAndLoads = () => { 

    const [loading, setLoading] = useState(false)

    let controller; 

    // to call the api endpoint
    const callEndpoint = async (fetchCall) => { 
        

        if (fetchCall.controller) controller = fetchCall.controller; 
        
        let result = {  }
        setLoading(true)
        try {
            result = await fetchCall.call
            result = await result.json()
        } catch (error) {
            setLoading(false)
            console.log(error)
        }

        setLoading(false)
        
        return result;
    }


    //to cancel the api call
    const cancelEndpoint = () => { 
        setLoading(false)
        controller && controller.abort()
    }


    // once the component destroy, its called out the callEndpoint.
    useEffect(() => {
        return () => {
          cancelEndpoint();
        };
      }, []);

      return { loading, callEndpoint }

}

export default useFetchAndLoads