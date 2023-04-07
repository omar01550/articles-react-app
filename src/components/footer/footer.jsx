import { Link } from 'react-router-dom';
import './footer.css'
import { memo } from 'react';


function Footer() {
    return (
        <footer>

            <div class="footer-content">

                <h3>Footer Example</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae felis scelerisque, gravida sapien non, cursus augue. Aenean id pretium turpis. Suspendisse eros nunc, sollicitudin nec.</p>

                <ul class="socials">

                    <li><Link to="#"><i class="fa fa-facebook"></i></Link></li>

                    <li><Link to="#"><i class="fa fa-twitter"></i></Link></li>

                    <li><Link to="#"><i class="fa fa-google-plus"></i></Link></li>

                    <li><Link to="#"><i class="fa fa-youtube"></i></Link></li>

                    <li><Link to="#"><i class="fa fa-linkedin-square"></i></Link></li>

                </ul>

            </div>

            <div class="footer-bottom">

                <p>Copyright &copy <span id="year"></span> <Link to="#">@coding_dev_</Link> </p>

                <div class="footer-menu">

                    <ul class="f-menu">

                        <li><Link to="">Home</Link></li>

                        <li><Link to="">About</Link></li>

                        <li><Link to="">Contact</Link></li>

                        <li><Link to="">Blog</Link></li>

                    </ul>

                </div>

            </div>

        </footer>


    );
}

export default memo(Footer);
