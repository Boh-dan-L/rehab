import "./style/index.scss"
import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { BrowserRouter, HashRouter } from 'react-router-dom';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<React.StrictMode>
    <HashRouter>
        <App tab="home" />
    </HashRouter>
</React.StrictMode>
);
