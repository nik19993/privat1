import React from "react";
import ReactDOM from "react-dom/client";
import "./../../css/app.css";

import ClientForm from "./components/ClientForm";

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
            <div className="container">
                <ClientForm />
            </div>
        </div>
    );
};

export default App;

const container = document.getElementById("app");

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Не знайдено елемент з ID "app".');
}
