import { Link } from "react-router-dom";

export default function NoProductMessage() {
  return (
    <div className="noMessageContainer">
      <p> Your car is empty</p>
      <span>
      Go to <Link to="/store">store</Link>
      </span>
    </div>
  );
}
