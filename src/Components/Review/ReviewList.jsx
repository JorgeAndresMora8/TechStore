import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewForm from "./Components/reviewForm";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Spinner from "../../Loading/Spinner";
import ReviewItem from "./Components/reviewItem";

export default function ReviewList() {
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/review")
      .then((res) => res.json())
      .then((resp) => setReview(resp))
      .then((resp) => setLoading(false));
  }, []);

  return (
    <div className="review-container">
      <ReviewForm />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {review.map((review) => (
            <ReviewItem review={review} />
          ))}
        </>
      )}
    </div>
  );
}
