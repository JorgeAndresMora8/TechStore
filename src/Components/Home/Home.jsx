import { faComputer, faPercent, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Home(){ 
    return ( 
        <div className="whole-container">
        <div className="boxContainer">
            <div className="home-header">
                <div className="home-header-text-area">
                    <b>Teach <span className="title-highligh">Products</span></b>
                    <p>Welcome to our ecommerce, <span className="highlight">where you'll find</span> a wide range of phones from top brands like<span className="highlight"> Apple, Samsung, and many more.</span> Explore our selection and choose the perfect device for you.</p>
                    <button>get products</button>
                </div>
                <div className="home-header-image-area">
                    <img src="./Iphone12.png" style={{width: '70%'}}/>
                </div>
            </div>
            <div className="home-item-container">
                <div className="home-item">
                    <FontAwesomeIcon className="home-item-icon" icon={faComputer}/>
                    <b>A lot of Options</b>
                    <p> We offer affordable prices for everyone,in one place.We offer affordable prices for everyone,in one place.</p>
                </div>
                <div className="home-item">
                    <FontAwesomeIcon className="home-item-icon" icon={faTag}/>
                    <b>Best Prices In The Market</b>
                    <p>We offer affordable prices for everyone,in one place.We offer affordable prices for everyone,in one place.</p>
                </div>
                <div className="home-item">
                    <FontAwesomeIcon className="home-item-icon" icon={faComputer}/>
                    <b>Best brands in the world</b>
                    <p>We offer affordable prices for everyone,in one place.We offer affordable prices for everyone,in one place.</p>
                </div>
                <div className="home-item">
                    <FontAwesomeIcon className="home-item-icon" icon={faPercent}/>
                    <b>Discount to all products</b>
                    <p>We offer affordable prices for everyone,in one place.We offer affordable prices for everyone,in one place.</p>
                </div>
            </div>
            <div className="home-header">
                <div className="home-header-image-area">
                    <img src="./sonyHeadphone.jpg" style={{width:'70%'}}/>
                </div>
                <div className="home-header-text-area">
                    <b><span className="title-highligh">Affordable</span> Tech Prices</b>
                    <p>We offer affordable prices for everyone, ensuring that each person can enjoy the latest technology without worrying about the budget. Find quality and affordability in one place.</p>
                    <button>get products</button>
                </div>
            </div>
            
            </div>
            <div className="samsung-buds-container">
                <div className="samsung-buds-image-area">
                    <img src="./GalaxyBuds.png" style={{width: "100%"}} alt="" />
                </div>
                <div className="home-header-text-area">
                    <b>Exceptional Headphone Range</b>
                    <p>In our ecommerce, we offer an exceptional range of headphones to meet your auditory needs. From wireless earbuds to noise-canceling headphones, you'll find the perfect combination of sound quality and comfort. Discover an exceptional listening experience!</p>
                    <button>get products</button>
                </div>

            </div>
            <div className="category-item-container">
                <div className="category-item category-phone">
                    <b><Link to={'/store'}>Phone</Link></b>
                </div>
                <div className="category-item category-headphone">
                <b><Link to={'/store'}>Headphone</Link></b>
                </div>
                <div className="category-item category-tv">
                <b><Link to={'/store'}>Tv</Link></b>
                </div>
                <div className="category-item category-accesories">
                <b><Link to={'/store'}>Accesories</Link></b>
                </div>
            </div>
            <div className="videogame-banner">
                <div className="videogame-banner-image">
                    <img src="./xboxSerieX.jpg" style={{width: "100%"}} alt="" />
                </div>
                <div className="videogame-banner-text">
                    <b>Level Up Your Gaming Experience</b>
                    <p>Dive into immersive worlds with top-tier consoles and games, curated for every player's preference. Elevate your gaming today!!</p>
                </div>
            </div>
            </div>
    )
}