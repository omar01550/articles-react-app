import './App.css';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/home.jsx'
import SearchPage from './pages/search/search';
import FvasPage from './pages/favs-page/favs';


console.log(Home);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favs" element={<FvasPage />} />
          <Route path="/sports" element={Home} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
