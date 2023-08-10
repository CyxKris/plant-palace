import './App.css'

import { Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import Shop from './components/Shop';
import Sitemap from './components/Sitemap';
import NotFound from './components/404';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/shop" element={ <Shop />} />
                    <Route path="/sitemap" element={ <Sitemap />} />
                    <Route path="*" element={ <NotFound />} />
                </Routes>
            </main>
            <Footer />
            <ThemeSwitcher /> 
        </>
    );
}

export default App
