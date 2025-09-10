import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // global styles (you can change/remove later)

import AppContextprovider from "./context/AppContext"; //app context provider from the app context

ReactDOM.createRoot(document.getElementById("root")).render(
<AppContextprovider>
    <App />
</AppContextprovider>

);
