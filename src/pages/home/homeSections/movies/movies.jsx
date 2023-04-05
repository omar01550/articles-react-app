import './movies.css';
import Card from '../../../../components/card/card';
import { useState, useEffect } from 'react';


function Movies() {


    const apiKey = "d6e13b09676346608115146fd709df84";
    const moviesUrl = `https://newsapi.org/v2/everything?q=movies&apiKey=${apiKey}`;

    const [articles, setArticles] = useState([]);

    useEffect(function () {

        fetch(moviesUrl)
            .then((res) => res.json())
            .then(data => setArticles(data.articles));



    }, [articles])


    return (
        <section className="movies-articles category-section">
            <h1>
                movies
            </h1>

            <div className="articles">
                {

                    articles.length != 0 ? articles.map(ele => <Card title={ele.title} image={ele.urlToImage} url={ele.url} />) : 'no data'

                }

            </div>

        </section>
    );
}

export default Movies;
