import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import FooterNavigation from "./Components/FooterNavigation";

export default function Footer() {

  const auth = useSelector(state => state.auth)

  return (
    <div className="footer-container">
      <div className="footer-item">
        <b>Logo</b>
      </div>

      {auth.token && <FooterNavigation />}

      <div className="footer-item">
        <b>About The Store</b>
        <p>
        Welcome to Store: Your one-stop shop for cutting-edge gadgets and expert tech advice. Discover innovation today!
        </p>
      </div>

      <div className="footer-item">
        <b>Information</b>
        <p>
        Your trusted destination for 100% original gadgets and unparalleled tech expertise. Experience authenticity!
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            margin: "1rem",
            flexWrap: 'wrap'
          }}
        >
          <img style={{ width: "140px" }} src="./AAIP.png" />
          <img style={{ width: "50px" }} src="./cace.jpeg" />
          <img style={{ width: "50px" }} src="./dataFiscal.jpg" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            margin: "1rem",
            flexWrap: 'wrap'
          }}
        >
          <p className="Copyright">
            Copyright © Omnichannel S.A. Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}
