import { Link } from "react-router-dom";
import { useState } from "react";
import NavMenu from "../navMenu/nav";
import './header.css';
import moonImage from '../../images/moon.png';
import heartIamge from '../../images/heart.png';
import BarsImage from '../../images/bars.png';




function Header() {

    // state of display nav
    const [nav, setNav] = useState("nav-menu hidden-nav")




    function showNav() {
        if (nav == 'nav-menu hidden-nav') {
            setNav('nav-menu')
        } else {
            setNav('nav-menu hidden-nav')
        }
    }





    return (
        <header>


            <div className="logo">
                <h1>ARTICLES</h1>
            </div>




            <img src={moonImage} alt="not found moon" className="moon" />

            <div className="header-icon">
                <Link className="favs-link" to="/favsPage">
                    <Link to="/favs">
                        <img src={heartIamge} alt="not found" className="fav-icon" />
                    </Link>
                    <span className="favs-count">0</span>
                </Link>

                <img src={BarsImage} alt="not found bars icon" className="bars pointer" onClick={showNav} />

            </div>

            <NavMenu
                showNav={showNav}
                setNav={setNav}
                nav={nav}
            />





        </header>
    )
}


export default Header;