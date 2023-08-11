import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Importing pages
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Sitemap from "./pages/sitemap/Sitemap";
import Error from "./pages/error/404";

// Importing Components
import ThemeSwitcher from "./components/ThemeSwitcher";
import Product from "./components/Product";
import Cart from "./pages/cart/Cart";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/shop"
                        element={<Shop />}
                    />
                    <Route
                        path="/sitemap"
                        element={<Sitemap />}
                    />
                    <Route
                        path="*"
                        element={<Error />}
                    />
                    <Route
                        path="/shop/products/:id"
                        element={<Product />}
                    />
                    <Route
                        path="/shop/cart"
                        element={<Cart />}
                    />
                </Routes>
            </main>
            <Footer />
            <ThemeSwitcher />
        </>
    );
}

export default App;
