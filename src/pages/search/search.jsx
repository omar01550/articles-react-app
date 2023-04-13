import { useEffect, useRef, useState, useContext } from 'react';
import './search.css';
import Card from '../../components/card/card';
import Loder from '../../components/pageLoder/loder';
import { favsContext } from '../../App';


function SeachPage() {

    const [query, setQuery] = useState();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false)
    const searchInput = useRef()



    useEffect(function () {
        console.log(loading);
    }, [loading])

    const [favs, setFavs] = useContext(favsContext);

    useEffect(() => {
        localStorage.reactFavs = JSON.stringify(favs);

    }, [favs])


    const apiKey = "a4b3c64fae0b42f6925028eff0511cae";
    const footballUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    async function getData() {
        setLoading(true)
        let response = await fetch(footballUrl);
        console.log(response.status);
        let resJson = await response.json();
        let articles = resJson.articles;

        setArticles(articles);
        setLoading(false);

    }



    return (
        <main class="search-page">
            <form id="search-form">
                <input type="text" id="search-box" placeholder="Search..." onKeyUp={e => { setQuery(e.target.value) }} ref={searchInput} />
                <button id="search-btn" onClick={e => {
                    setArticles([])
                    searchInput.current.value = '';

                    e.preventDefault()
                    getData()
                }}>Search</button>

            </form>

            <div id="search-results">
                <h2 class="result-for">Search Results</h2>

                <div class="search-result-cards">
                    {
                        articles.length != 0
                            ? articles.map(ele => <Card title={ele.title} image={ele.urlToImage} url={ele.url} favs={favs} setFavs={setFavs} />)
                            : <Loder loading={loading} />

                    }



                </div>
            </div>



        </main>

    );
}

export default SeachPage;