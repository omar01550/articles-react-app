import './football.css';
import Card from '../../../../components/card/card';
import { useState, useEffect } from 'react';

function Football() {

    const apiKey = "d6e13b09676346608115146fd709df84";

    const [articles, setArticles] = useState([]);

    useEffect(function () {
        const footballUrl = `https://newsapi.org/v2/everything?q=football&apiKey=${apiKey}`;
        fetch(footballUrl)
            .then((res) => res.json())
            .then(data => setArticles(data.articles));
        // .then(data => console.log(data.articles));


    }, [articles])



    return (
        <section className="football-articles category-section">
            <h1>football</h1>
            <div className="articles">

                {
                    articles.length != 0 ? articles.map(ele => <Card title={ele.title} image={ele.urlToImage} url={ele.url} />) : 'no data'
                }
            </div>



        </section>

    );
}

export default Football;
