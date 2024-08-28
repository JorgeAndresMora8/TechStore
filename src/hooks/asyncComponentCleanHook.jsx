import { useEffect } from "react"

export const useAsync = (
    asyncFn,
    successFunction, 
    returnFunction, 
    dependencies = []
) => { 
    useEffect(() => { 
        let isActive = true; 
        asyncFn().then((resp) => { 
            if(isActive) successFunction(resp)
        }); 
        return () => { 
            returnFunction && returnFunction()
            isActive = false
        }

    }, dependencies)
}