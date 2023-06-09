import './football.css';
import Card from '../../../../components/card/card';
import Loder from '../../../../components/pageLoder/loder';
//firebase
import { getFirestore, collection, addDoc, onSnapshot, query, limit, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';
import { favsContext } from '../../../../App';
import { useState, useEffect, memo, useContext } from 'react';
import { firebaseContext } from '../../../../index.js';

function Football() {


    const [articles, setArticles] = useState([]);
    const [favs, setFavs] = useContext(favsContext);
    const firebaseApp = useContext(firebaseContext);
    const db = getFirestore(firebaseApp);
    const newsCollections = collection(db, 'news');

    const q = query(newsCollections, where("type", "array-contains", "football")
        , limit(9))

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
