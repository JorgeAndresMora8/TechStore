import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function LoginAction(data) {
    const nav = useNavigate()
    const dispatch = useDispatch()


  localStorage.setItem(
    "access-token",
    JSON.stringify({
      token: data.token,
      email: data.user.email,
      admin: false,
      auth: true,
    })
  );
  dispatch(
    loginRedux({ token: data.token, email: data.user.email, admin: false })
  );
  nav(PrivateRoutes.HOME, { replace: true });
}

export const LoginService = async (email, password) => {
  // const url = "http://localhost:8080/auth/login";
  //     const bodyRequest = {
  //         email: email,
  //         password: password
  //     }

  //     fetch(url, {
  //         method: 'POST',
  //         body: JSON.stringify(bodyRequest),
  //         headers: {
  //             'Content-Type': 'application/json' // Set appropriate headers, here JSON
  //           },
  //     }).then((resp) => resp.json())
  //     .then((resp) => {
  //         if(!resp.error){
  //             localStorage.setItem('access-token', JSON.stringify({token: resp.token, email: resp.user.email, admin: false, auth: true }))
  //             dispatch(loginRedux({token: resp.token, email: resp.user.email, admin: false}))
  //             nav(PrivateRoutes.HOME, {replace: true})
  //         }else{
  //             console.log('error')
  //             setError({message: resp.error, status: true})
  //         }
  //         console.log(resp)
  //     })

  const BodyRequest = JSON.stringify({
    email: email,
    password: password,
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let loginResponse;

  axios
    .post("https://techstorebackend-1sdx.onrender.com/auth/login", BodyRequest, config)
    .then((resp) => LoginAction(resp.data))
    .catch((error) => console.log("Hubo un error", error));
};

//   if (!resp.error) {
//     localStorage.setItem(
//       "access-token",
//       JSON.stringify({
//         token: resp.token,
//         email: resp.user.email,
//         admin: false,
//         auth: true,
//       })
//     );
//     dispatch(
//       loginRedux({ token: resp.token, email: resp.user.email, admin: false })
//     );
//     nav(PrivateRoutes.HOME, { replace: true });
//   } else {
//     console.log("error");
//     setError({ message: resp.error, status: true });
//   }




export const SignUpService = async (data) => { 

    const requestBody = JSON.stringify(data)


    return await axios.post('https://techstorebackend-1sdx.onrender.com/auth/signup', requestBody, { 
        headers: { 
            "Content-Type": "application/json"
        }})
}