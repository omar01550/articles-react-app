import './card.css';
import heartImage from '../../images/heart.png';
import EmptyHeart from '../../images/empty-heart.png'
import { useRef } from 'react';


function Card({ title, image, url, favs, setFavs }) {

    function IsInFavs() {
        return favs.filter(ele => ele.title == title).length != 0 ? true : false
    }

    function AddToFavs() {
        setFavs([...favs, { title: title, urlToImage: image, url: url }])
    }

    function RemoveFRomFavs() {
        setFavs(favs.filter(ele => ele.title != title));
    }

    function handelHeartImg() {
        return (
            IsInFavs()
                ? heartImage
                : EmptyHeart
        )
    }












    return (


        <div className="card" id={title} style={{
            backgroundImage: `url(${image})`
        }}>

            <div class="card-overlay"></div>
            <img class="love-icon" src={handelHeartImg()} alt="not found" onClick={function () {
                if (IsInFavs()) {
                    RemoveFRomFavs()
                } else {
                    AddToFavs()
                }

            }} />
            <img src="" alt="" class="article-image" />
            <div class="card-content">
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
