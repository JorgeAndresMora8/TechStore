import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./Components/ErrorMessage";
import { useDispatch } from "react-redux";
import { login as loginRedux } from "../../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../Navbar/Links/linkRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { LoginService } from "../../../Service/AuthService";
import { LoginActions } from "./utils/LoginActions";
import { setAndPersistLocalStorage } from "../../../helpers/LocalStorageActions";

export default function Login() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ status: false, message: "" });

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "https://techstorebackend-1sdx.onrender.com/auth/login";
    const bodyRequest = {
      email: email,
      password: password,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(bodyRequest),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (!resp.error) {

          const loginObj = {
            token: resp.token,
            email: resp.user.email,
            admin: resp.user.admin,
          };

          dispatch(loginRedux(loginObj));
          nav("/store", { replace: true });

        } else {
          console.log("error");
          setError({ message: resp.error, status: true });
        }
      });
  };

  return (
    <div className="container-auth">
      <form onSubmit={handleSubmit} action="" className="auth-form">
        {error.status && <ErrorMessage message={error.message} />}
        <FontAwesomeIcon
          style={{ marginBottom: "1rem", color: "#166cfd" }}
          className="fa-4x"
          icon={faUser}
        />
        <div className="input-header-text-area">
          <div className="in">
            <b className="text-title-auth-title">Welcome Back!</b>
            <p className="text-title-auth-text">
              Please add the required info.
            </p>
          </div>
        </div>
        <div className="input-field-container">
          <label htmlFor="" className="input-label">
            Email Address
          </label>
          <input
            onChange={handleEmailChange}
            className="input-field"
            type="text"
            name="email"
            id="email"
          />
        </div>

        <div className="input-field-container">
          <label htmlFor="" className="input-label">
            Password
          </label>
          <input
            onChange={handlePasswordChange}
            className="input-field"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button className="form-auth-btn">Login</button>
        <div className="footer-form">
          <b className="dont-have-account-flag">
            Dont have an account. <Link to="/signup">Sign Up</Link>
          </b>
        </div>
      </form>
    </div>
  );
}
