import './favs.css';
import Card from '../../components/card/card.jsx';
import { useEffect, useState } from 'react';

function FvasPage() {

    const [favs, setFavs] = useState(() => {
        return (
            window.localStorage.reactFavs != null && window.localStorage.reactFavs != undefined
                ? JSON.parse(window.localStorage.reactFavs)
                : []
        )
    });

    useEffect(() => {
        localStorage.reactFavs = JSON.stringify(favs);
    }, [favs])

    return (
        <main id="favs-page">
            <div className="section-title">
                <h3>favs posts</h3>
            </div>

            <div className="cards main-section">
                {
                    favs.length != 0
                        ? favs.map(ele =>
                            <Card
                                title={ele.title}
                                id={ele.id}
                                image={ele.urlToImage}
                                url={ele.url}
                                favs={favs}
                                setFavs={setFavs}
                            />
                        )
                        : "no data"
                }

            </div>


        </main>
    );
}

export default FvasPage;
