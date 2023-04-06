import { Link } from "react-router-dom";
import HomeImage from '../../images/home.png';
import SearchImage from '../../images/search.png';
import About from '../../images/about-us.png';
import footballImage from '../../images/football.png';
import MoviesImage from '../../images/movies.png';
import EmailImage from '../../images/email.png';
import CoinsImage from '../../images/coins.png';
import HealthImage from '../../images/health.png';
import TechImage from '../../images/tech.png';
import newsImage from '../../images/news.png';
import closerImage from '../../images/close-white.png'






function NavMenu({ showNav, setNav, nav }) {

    return (
        <div className={nav}>
            <div className="nav" id="nav">
                <div className="menu-head">
                    <h2 className="">articles</h2>
                    <img src={closerImage} alt="notfound" className="closer pointer" onClick={showNav} />
                </div>

                <ul>
                    <li>
                        <Link to="/">

                            <img src={HomeImage} alt="not found" className="nav-icon" />
                            <p>home</p>

                        </Link>
                    </li>

                    <li>
                        <Link to="/search">
                            <img src={SearchImage} alt="not found" className="nav-icon" />
                            <p>search</p>

                        </Link>
                    </li>

                    <li>
                        <Link to="/about">

                            <img src={About} alt="not found" className="nav-icon" />
                            <p>about</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/sports">
                            <img src={footballImage} alt="not found" className="nav-icon" />
                            <p>sposts</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/movies">
                            <img src={MoviesImage} alt="not found" className="nav-icon" />
                            <p>movies</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/coins">
                            <img src={CoinsImage} alt="not found" className="nav-icon" />
                            <p>coins</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/tech">
                            <img src={TechImage} alt="not found" className="nav-icon" />
                            <p>tech</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact">
                            <img src={EmailImage} alt="not found" className="nav-icon" />
                            <p>contact</p>
                        </Link>
                    </li>


                    <li>
                        <Link to="/news">
                            <img src={newsImage} alt="not found" className="nav-icon" />
                            <p>news</p>
                        </Link>
                    </li>



                    <li>
                        <Link to="health.html">
                            <img src={HealthImage} alt="not found" className="nav-icon" />
                            <p>health</p>
                        </Link>
                    </li>



                </ul>

            </div>

            <div className="close-nav " onClick={showNav}>

            </div>


        </div>
    );
}

export default NavMenu;