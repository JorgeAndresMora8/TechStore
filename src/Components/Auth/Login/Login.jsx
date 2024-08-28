import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/slice/userSlice";
import { PrivateRoutes } from "../../Navbar/Links/linkRoutes";
import ErrorMessage from "./Components/ErrorMessage";
import { LoginUser } from "./Service/Login.service";

export default function Login() {
  const initialErrorMessage = { status: false, message: "" };

  const nav = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(initialErrorMessage);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fetchLogin = async () => {
      const resp = await LoginUser({ email, password });
      const data = await resp.json();

      if (!data.error) {
        const loginObj = {
          token: data.token,
          email: data.user.email,
          admin: data.user.admin,
        };
        dispatch(loginUser(loginObj));
        nav(PrivateRoutes.STORE, { replace: true });
      } else {
        setError({ message: data.error, status: true });
      }
    };

    fetchLogin();
  };

  return (
    <div className="container-auth">
      <form onSubmit={handleSubmit} action="" className="auth-form">
        {error.status && <ErrorMessage message={error.message} />}
        <img
          src="./techlogo.png"
          style={{ width: "150px", marginBottom: "1rem" }}
        />
        <div className="input-header-text-area">
          <div className="in">
            <b className="text-title-auth-title">Hi there!</b>
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
            Dont have an account? <Link to="/signup">Sign Up</Link>
          </b>
        </div>
      </form>
    </div>
  );
}
