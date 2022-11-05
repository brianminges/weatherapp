import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom";
import { Weather } from "./components/Weather"
import "./index.css"

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

const root = createRoot(document.getElementById('root'));


root.render(
<React.StrictMode>
    <Router>
        <Weather />
    </Router>
</React.StrictMode>
);
