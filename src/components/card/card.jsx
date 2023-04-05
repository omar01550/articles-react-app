import './card.css';
import heartImage from '../../images/heart.png';

function Card({ title, image, url }) {
    return (


        <div className="card" style={{
            backgroundImage: `url(${image})`
        }}>
            <div class="card-overlay"></div>
            <img class="love-icon" src={heartImage} alt="not found" /><img src="" alt="" class="article-image" /><div class="card-content">
                <h3 class="card-title">{title}</h3>
                <p class="card-text"></p>
                <a class="details-btn" href={url} target="_blank">
                    details
                </a>
            </div>

        </div>

    );
}

export default Card;
