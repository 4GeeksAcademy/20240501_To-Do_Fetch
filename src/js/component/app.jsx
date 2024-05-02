import React from "react";
import AppHeader from "./header";
import AppBody from "./body";
import AppFooter from "./footer";
import "../../styles/app.css";

const TASKS = [
    {id: 0, task: "Wake up"},
    {id: 1, task: "Take a dump"},
    {id: 2, task: "Get out of bed"},
]


const App = () => {
	return (
		<>
            <div className="wrap">
                <div id="header"><AppHeader /></div>
                <div id="body"><AppBody works={TASKS}/></div>
                <div id="footer"><AppFooter works={TASKS}/></div>
            </div>
		</>
    )
};

export default App;
