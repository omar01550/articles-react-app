import './favs.css';
import Card from '../../components/card/card.jsx';
import { useEffect, useState } from 'react';

function FvasPage() {

    const [favs, setFavs] = useState([]);


    useEffect(function () {
        const FavsPosition = window.localStorage.getItem("afvsArticlesReact");

        if (!(FavsPosition == undefined || FavsPosition == null)) {
            setFavs(JSON.parse(FavsPosition));
        }

        // Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.


    }, [])

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
                                id={ele.title}
                                url={ele.url}
                                image={ele.urlToImage}
                                favs={favs}
                                setFavs={setFavs}
                            />

                        )
                        : 'no items in favs'
                }

            </div>


        </main>
    );
}

export default FvasPage;
