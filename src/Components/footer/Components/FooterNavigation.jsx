import { Link } from "react-router-dom";

export default function FooterNavigation(){ 
    return ( 
        <div className="footer-item">
        <b>Navigation</b>
        <ul>
          <li><Link style={{color: "darkgray", textDecoration: 'none'}}  to={'/'}>home</Link></li>
          <li><Link  style={{color: "darkgray", textDecoration: 'none'}} to={'/store'}>store</Link></li>
          <li><Link  style={{color: "darkgray", textDecoration: 'none'}} to={'/cart'}>cart</Link></li>
          
        </ul>
      </div>
    )
}