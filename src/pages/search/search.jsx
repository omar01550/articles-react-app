import { useEffect, useState } from 'react';
import './search.css';
import Card from '../../components/card/card';
import Loder from '../../components/pageLoder/loder';


function SeachPage() {

    const [query, setQuery] = useState();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState('loading')
    const apiKey = "d6e13b09676346608115146fd709df84";
    const footballUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    async function getData() {
        let response = await fetch(footballUrl);
        let resJson = await response.json();
        let articles = resJson.articles;
        setArticles(articles);

    }



    return (
        <main class="search-page">
            <form id="search-form">
                <input type="text" id="search-box" placeholder="Search..." onKeyUp={e => { setQuery(e.target.value) }} />
                <button id="search-btn" onClick={e => {
                    e.preventDefault()
                    console.log(getData());
                }}>Search</button>

            </form>

            <div id="search-results">
                <h2 class="result-for">Search Results</h2>

                <div class="search-result-cards">
                    {
                        articles.length != 0
                            ? articles.map(ele => <Card title={ele.title} image={ele.urlToImage} url={ele.url} />)
                            : 'no data'

                    }



                </div>
            </div>



        </main>

    );
}

export default SeachPage;