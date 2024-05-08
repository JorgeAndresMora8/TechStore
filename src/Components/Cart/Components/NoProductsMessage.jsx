import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NoProductMessage() {
  return (
    <div className="noMessageContainer">
      <FontAwesomeIcon className="noMessageCartIcon fa-2x" icon={faCartArrowDown} />
      <p>
        No Products in the cart.
      </p>
      <span>
      Go to <Link to="/store">store</Link>
      </span>
    </div>
  );
}
