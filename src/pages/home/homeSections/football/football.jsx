import './football.css';
import Card from '../../../../components/card/card';
import Loder from '../../../../components/pageLoder/loder';
import { favsContext } from '../../../../App';
import { useState, useEffect, memo, useContext } from 'react';

function Football() {

    const apiKey = "a4b3c64fae0b42f6925028eff0511cae";

    const [articles, setArticles] = useState([]);
    const [favs, setFavs] = useContext(favsContext);

    useEffect(() => {
        localStorage.reactFavs = JSON.stringify(favs);

    }, [favs])




    useEffect(function () {
        const footballUrl = `https://newsapi.org/v2/everything?q=football&apiKey=${apiKey}`;

        fetch(footballUrl)
            .then(function (res) {
                console.log(res)
                return res.json()
            })
            .then(data => {
                data.articles.length = 8;
                return data.articles;
            })
            .then(data => setArticles(data));
        // .then(data => console.log(data.articles));


    }, [])



    return (
        <section className="football-articles category-section">
            <h1>football</h1>
            <div className="articles">

                {
                    articles.length != 0 ? articles.map(ele => <Card title={ele.title} image={ele.urlToImage} url={ele.url} favs={favs} setFavs={setFavs} />) : <Loder loading={true} />
                }
            </div>



        </section>

    );
}

export default memo(Football);
