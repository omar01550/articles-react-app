import './movies.css';
import Card from '../../../../components/card/card';
import Loder from '../../../../components/pageLoder/loder';
import { useState, useEffect, memo } from 'react';


function Movies() {


    const apiKey = "d6e13b09676346608115146fd709df84";
    const moviesUrl = `https://newsapi.org/v2/everything?q=movies&apiKey=${apiKey}`;

    const [articles, setArticles] = useState([]);

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



    useEffect(function () {

        fetch(moviesUrl)
            .then((res) => res.json())
            .then(data => {
                data.articles.length = 8;
                return data.articles;
            })

            .then(data => setArticles(data));



    }, [articles])


    return (
        <section className="movies-articles category-section">
            <h1>
                movies
            </h1>

            <div className="articles">
                {

                    articles.length != 0 ? articles.map(ele => <Card title={ele.title} image={ele.urlToImage} url={ele.url} favs={favs} setFavs={setFavs} />) : <Loder />

                }

            </div>

        </section>
    );
}

export default memo(Movies);
