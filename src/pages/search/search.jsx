import { useEffect, useRef, useState, useContext } from 'react';
import './search.css';
import Card from '../../components/card/card';
import Loder from '../../components/pageLoder/loder';
import { getFirestore, collection, addDoc, onSnapshot, query, limit, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';
import { favsContext } from '../../App';
import { firebaseContext } from '../../index.js';

function SeachPage() {

    const [searchQuery, setSearchQuery] = useState();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false)
    const searchInput = useRef()
    const firebaseApp = useContext(firebaseContext);
    const db = getFirestore(firebaseApp);
    const newsCollections = collection(db, 'news');





    useEffect(function () {
        console.log(loading);
    }, [loading])

    const [favs, setFavs] = useContext(favsContext);

    useEffect(() => {
        localStorage.reactFavs = JSON.stringify(favs);

    }, [favs])


    useEffect(() => {
        console.log(searchQuery);
    }, [searchQuery])


    async function getData() {


        setLoading(true)
        console.log(searchQuery);
        const q = query(newsCollections, where("type", "==", "[coins]"))
        const docs = getDocs(q)

            .then((result) => {

                console.log(result);
                setArticles(result.docs.map(ele => ele.data()))


            }).catch((err) => {

            });
        console.log(searchQuery);


        // setArticles(articles);
        setLoading(false);

    }



    return (
        <main class="search-page">
            <form id="search-form">
                <input type="text" id="search-box" placeholder="Search..." ref={searchInput} />
                <button id="search-btn" onClick={e => {
                    setSearchQuery(searchInput.current.value)

                    e.preventDefault();

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