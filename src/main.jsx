import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
// import ThemeSwitcher from './components/ThemeSwitcher';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            {/* <ThemeSwitcher /> */}
        </BrowserRouter>
    </React.StrictMode>,
);
