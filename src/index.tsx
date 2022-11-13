import React from "react";
import ReactDOM from "react-dom/client";


const App: React.FC = () => {
    return <div>
        <h1>Hello from React!</h1>
    </div>
}

const div = document.createElement("div");
div.id = "root";

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)