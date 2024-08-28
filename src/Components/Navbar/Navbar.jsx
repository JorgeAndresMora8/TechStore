import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/slice/userSlice";
import { PrivateRoutes, PublicRoutes } from "./Links/linkRoutes";

function Navbar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const nav = useNavigate();

  function handleSubmit() {
    dispatch(logoutUser());
    nav(PublicRoutes.LOGIN, { replace: true });
  }

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="sticky">
      <span>
        <Link to="/store">
          <img src="/techlogo.png" style={{ width: "80px" }} alt="" />
        </Link>
      </span>
      <nav ref={navRef}>
        <Link onClick={showNavbar} to={PrivateRoutes.HOME}>
          home
        </Link>
		{/* <Link onClick={showNavbar} to={'/admin'}>
          admin
        </Link> */}
        <Link onClick={showNavbar} to={PrivateRoutes.STORE}>
          store
        </Link>
        <Link onClick={showNavbar} to={PrivateRoutes.CART}>
          cart
        </Link>
        {auth.token ? (
          <p className="login-btn" onClick={handleSubmit}>
            logout
          </p>
        ) : (
          <Link
            className="login-btn"
            onClick={showNavbar}
            to={PublicRoutes.LOGIN}
          >
            login
          </Link>
        )}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FontAwesomeIcon icon={faX} style={{ color: "#fff" }} />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} style={{ color: "rgb(0,0,56)" }} />
      </button>
    </header>
  );
}

export default Navbar;
