import './movies.css';
import Card from '../../../../components/card/card';
import Loder from '../../../../components/pageLoder/loder';
import { useState, useEffect, memo, useContext } from 'react';
import { favsContext } from '../../../../App';


function Movies() {


    const apiKey = "a4b3c64fae0b42f6925028eff0511cae";
    const moviesUrl = `https://newsapi.org/v2/everything?q=movies&apiKey=${apiKey}`;

    const [articles, setArticles] = useState([]);




    const [favs, setFavs] = useContext(favsContext);

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



    }, [])


    return (
        <section className="movies-articles category-section">
            <h1>
                movies
            </h1>

            <div className="articles">
                {

                    articles.length != 0 ? articles.map(ele => <Card title={ele.title} image={ele.urlToImage} url={ele.url} favs={favs} setFavs={setFavs} />) : <Loder loading={true} />

                }

            </div>

        </section>
    );
}

export default memo(Movies);
