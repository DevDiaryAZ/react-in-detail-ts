import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    return (
        <div>
            <OnOff />
            <OnOff />
            <OnOff />
        <hr/>
            <UncontrolledAccordion title={"Onclick accordion"}/>
        </div>
    );
}

export default App;
