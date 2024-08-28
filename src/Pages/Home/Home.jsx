import {
  faComputer,
  faPercent,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="whole-container">
      <div className="boxContainer">
        <div className="home-header">
          <div className="home-header-text-area">
            <b>
              The best ecommerce for <span className="title-highligh">tech products</span>
            </b>
            <p>
              Welcome to our ecommerce,{" "}
              <span className="highlight">where you'll find</span> a wide range
              of phones from top brands like
              <span className="highlight"> Apple, Samsung, and many more.</span>
            </p>
            <button>
              <Link to={"/store"}>get products</Link>
            </button>
          </div>
          <div className="home-header-image-area">
            <img src="./samsungS23Banner.png" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="home-item-container">
          <div className="home-item">
            <FontAwesomeIcon className="home-item-icon" icon={faComputer} />
            <b>A lot of Options</b>
            <p>
              Discover an array of tech wonders at TecStore: phones, TVs,
              computers, headphones, and much more!
            </p>
          </div>
          <div className="home-item">
            <FontAwesomeIcon className="home-item-icon" icon={faTag} />
            <b>Best Prices In The Market</b>
            <p>
              At TecStore, find unbeatable prices on a vast array of tech
              products, ensuring you get the best deal in the market!
            </p>
          </div>
          <div className="home-item">
            <FontAwesomeIcon className="home-item-icon" icon={faComputer} />
            <b>Best brands in the world</b>
            <p>
            TecStore proudly offers the market's top brands, ensuring
              unparalleled quality and reliability in every product.
            </p>
          </div>
          <div className="home-item">
            <FontAwesomeIcon className="home-item-icon" icon={faPercent} />
            <b>Discounts in products</b>
            <p>
            TecStore presents enticing discounts on a wide range of
              products, making premium technology more affordable than ever.
            </p>
          </div>
        </div>
        <div className="home-header">
          <div className="home-header-image-area">
            <img src="./HeadphoneSony.png" style={{ width: "100%" }} />
          </div>
          <div className="home-header-text-area">
            <b>
              <span className="title-highligh">Incredible </span>Prices
            </b>
            <p>
              We offer affordable prices for everyone, ensuring that each person
              can enjoy the latest technology without worrying about the budget.
              Find quality and affordability in one place.
            </p>
            <button>
              <Link to={"/store"}>get products</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="samsung-buds-container">
        <div className="samsung-buds-image-area">
          <img src="./GalaxyBuds.png" style={{ width: "100%" }} alt="" />
        </div>
        <div className="home-header-text-area">
          <b>Exceptional Options</b>
          <p>
            In our ecommerce, we offer an exceptional range of headphones to
            meet your auditory needs. From wireless earbuds to noise-canceling
            headphones.
          </p>
          <button>
            <Link to={"/store"}>get products</Link>
          </button>
        </div>
      </div>
      <div className="category-item-container">
        <div className="category-item category-phone">
          <b>
            <Link to={"/store"}>Phone</Link>
          </b>
        </div>
        <div className="category-item category-headphone">
          <b>
            <Link to={"/store"}>Headphone</Link>
          </b>
        </div>
        <div className="category-item category-tv">
          <b>
            <Link to={"/store"}>Tv</Link>
          </b>
        </div>
        <div className="category-item category-accesories">
          <b>
            <Link to={"/store"}>Accesories</Link>
          </b>
        </div>
      </div>
      <div className="videogame-banner">
        <div className="videogame-banner-image">
          <img src="./xboxSerieX.png" style={{ width: "100%" }} alt="" />
        </div>
        <div className="videogame-banner-text">
          <b>Level Up Your <span style={{color: "#15B415"}}>Gaming</span> Experience</b>
          <p>
            Dive into immersive worlds with top-tier consoles and games, curated
            for every player's preference. Elevate your gaming today!!
          </p>
          <button>
              <Link to={"/store"}>get products</Link>
            </button>
        </div>
      </div>
    </div>
  );
}
