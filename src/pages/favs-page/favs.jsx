import './favs.css';
import Card from '../../components/card/card.jsx';

function FvasPage() {
    return (
        <main id="favs-page">
            <div className="section-title">
                <h3>favs posts</h3>
            </div>

            <div className="cards main-section">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>


        </main>
    );
}

export default FvasPage;
