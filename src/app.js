import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

//Main App Component for layout
const AppComponent = () => {
    return (
        <div className="Container">
            <Header></Header>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent/>);
