import './App.css';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/home.jsx'
import SearchPage from './pages/search/search';
import FvasPage from './pages/favs-page/favs';
import { createContext, useState, useEffect } from 'react';




export const favsContext = createContext();


function App() {

  const [favs, setFavs] = useState(() => {
    return (
      window.localStorage.reactFavs != null && window.localStorage.reactFavs != undefined
        ? JSON.parse(window.localStorage.reactFavs)
        : []
    )
  });


  useEffect(() => {
    localStorage.reactFavs = JSON.stringify(favs);
  }, [favs])




  return (
    <div className="App">
      <BrowserRouter>
        <favsContext.Provider value={[favs, setFavs]}>
          <Header favsLength={favs.length} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favs" element={<FvasPage />} />
            <Route path="/sports" element={Home} />
          </Routes>
        </favsContext.Provider>
        <Footer />
      </BrowserRouter>

    </div >
  );
}

export default App;
