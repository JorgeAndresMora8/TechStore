import { Link } from "react-router-dom"

export default function CategoryBanner(){ 
    return ( 
        <div className="category-banner-container">
            <div className="category-banner-item">
                {/* <Link to={'/store/category/phone'}>Computer</Link> */}
                <b>Computer</b>
                <img src="/computerBanner.png" style={{width: '100%', borderRadius: '1rem'}}/>
            </div>

            <div className="category-banner-item">
                {/* <Link to={'/store/category/phone'}>Smartphone</Link> */}
                <b>CellPhone</b>
                <img src="/CellPhoneBanner.png" style={{width: '100%', borderRadius: '1rem'}}/>
            </div>

            <div className="category-banner-item">
                {/* <Link to={'/store/category/phone'}>Headphone</Link> */}
                <b>Headphone</b>
                <img src="/headphobeBanner.png" style={{width: '100%', borderRadius: '1rem'}}/>
            </div>

            <div className="category-banner-item">
                {/* <Link to={'/store/category/phone'}>Videogame</Link> */}
                <b>Videogames</b>
                <img src="/videogameBanner.png" style={{width: '100%', borderRadius: '1rem'}}/>
            </div>

           
        </div>
    )
}