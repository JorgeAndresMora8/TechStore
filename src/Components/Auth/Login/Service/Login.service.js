import { BACKEND_URL } from "../../../../Service/Config/URL"


export const LoginUser = (requestBody) => { 

    const loginObject = {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      }


    return fetch(( BACKEND_URL + "/auth/login" ), loginObject)
}