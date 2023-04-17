import { useEffect, useRef, useState, useContext } from 'react';
import './tech.css';
import Card from '../../components/card/card';
import Loder from '../../components/pageLoder/loder';
import { getFirestore, collection, addDoc, onSnapshot, query, limit, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';
import { favsContext } from '../../App';
import { firebaseContext } from '../../index.js';

function Tech() {

    const [articles, setArticles] = useState([]);
    const [favs, setFavs] = useContext(favsContext);
    const firebaseApp = useContext(firebaseContext);

    const db = getFirestore(firebaseApp);
    const newsCollections = collection(db, 'news');

    const q = query(newsCollections, where("type", "array-contains", "tech")
    )


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
        <main class="coins-page page">

            <h2 class="result-for">Tech</h2>

            <div class="articles">
                {
                    articles.length != 0
                        ? articles.map(ele => <Card title={ele.title} image={ele.urlToImage} url={ele.url} favs={favs} setFavs={setFavs} />)
                        : <Loder loading={true} />

                }



            </div>




        </main >

    );
}

export default Tech;