import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../Login/Components/ErrorMessage";
import { useState } from "react";
import { SignUpService } from "../../../Service/AuthService";
import { setAndPersistLocalStorage } from "../../../helpers/LocalStorageActions";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/slice/userSlice";

export default function Signup(){ 

    const dispatch = useDispatch()
    const nav = useNavigate()

    const [firstname, setFirstname] = useState('')
    const [ lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({status: false, message: ''})

    function HandleFirstnameChange(event){ setFirstname(event.target.value) }
    function HandleLastnameChange(event){ setLastname(event.target.value) }
    function HandleEmailChange(event){ setEmail(event.target.value) }
    function HandlePasswordChange(event){ setPassword(event.target.value) }

    const HandleSignup = async (event) => { 
        event.preventDefault()

        try{
        const { data } = await SignUpService({firstname, lastname, email, password})

        setAndPersistLocalStorage('access-token', data.token)
        nav('/store', { replace: true });
        dispatch(loginUser({ token: data.token, email: data.user.email, admin: false}))

        }catch(error){ 
            setError({status: true, message: error.response.data.error})
        }
    }

    return ( 
        <div className="container-auth">
        <form action="" className="auth-form">
        <div className="auth-response-area">
            {error.status && <ErrorMessage message={error.message}/>}
    </div>
            <div className="input-header-text-area">
            {/* <FontAwesomeIcon style={{color: '#166cfd'}} className="fa-4x" icon={faRightToBracket} /> */}
            <img src="./techlogo.png" style={{width: '150px', marginBottom: "1rem"}}/>
                <div className="in">
                    <b className="text-title-auth-title">Welcome!</b>
                    <p className="text-title-auth-text">Please add the required info.</p>
                </div>
            </div>
            <div className="input-field-container">
            <label htmlFor="" className="input-label">Name</label>
            <input onChange={HandleFirstnameChange} className="input-field" type="text" name="firstname" id="forstname-input"  />
            </div>
            <div className="input-field-container">
            <label htmlFor="" className="input-label">Lastname</label>
            <input onChange={HandleLastnameChange} className="input-field" type="text" name="lastname" id="lastname-input"  />
            </div>
            <div className="input-field-container">
            <label htmlFor="" className="input-label">Email Address</label>
            <input onChange={HandleEmailChange} className="input-field" type="text" name="email" id="email-input"  />
            </div>

            <div className="input-field-container">
            <label htmlFor="" className="input-label">Password</label>
            <input onChange={HandlePasswordChange} className="input-field" type="password" name="password" id="password-input"  /> 
            </div>
            <button className="form-auth-btn" onClick={HandleSignup}>Sign Up</button>
            <div className="footer-form">
            <b className="dont-have-account-flag">Already have an account? <Link to='/login'>Login</Link></b>
            </div>
        </form>
</div>
    )
}