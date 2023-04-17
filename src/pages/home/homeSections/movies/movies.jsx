import './movies.css';
import Card from '../../../../components/card/card';
import Loder from '../../../../components/pageLoder/loder';
import { getFirestore, collection, addDoc, onSnapshot, query, limit, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';
import { useState, useEffect, memo, useContext } from 'react';
import { favsContext } from '../../../../App';
import { firebaseContext } from '../../../../index.js';


function Movies() {


    const apiKey = "a4b3c64fae0b42f6925028eff0511cae";
    const [articles, setArticles] = useState([]);
    const firebaseApp = useContext(firebaseContext);
    const db = getFirestore(firebaseApp);
    const newsCollections = collection(db, 'news');

    const q = query(newsCollections, where("type", "==", ["cenima", "films", "movies"]), limit(9))






    const [favs, setFavs] = useContext(favsContext);


    useEffect(() => {
        localStorage.reactFavs = JSON.stringify(favs);

    }, [favs])







    useEffect(function () {

        const docs = getDocs(q)
            .then((result) => {


                setArticles(result.docs.map(ele => ele.data()))


            }).catch((err) => {

            });


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
