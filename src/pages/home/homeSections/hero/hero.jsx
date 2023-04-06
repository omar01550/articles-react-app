import './hero.css';
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <section className="hero">
            <div className="overlay"></div>
            <div className="container">
                <h1>Welcome to my website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit libero nec felis rhoncus
                    tincidunt.</p>

                <Link to="/search" className="search-btn ">Search</Link>

            </div>
        </section>

    );
}

export default Hero;