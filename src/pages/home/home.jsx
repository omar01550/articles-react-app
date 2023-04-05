import Hero from "./homeSections/hero/hero";
import Football from "./homeSections/football/football";
import Movies from "./homeSections/movies/movies";

function Home() {
    return (
        <main className="home" id="home">
            <Hero />
            <Football />
            <Movies />
        </main>


    )
}

export default Home