import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionIsCollapsed, setAccordionIsCollapsed] = useState<boolean>(false)
    const [isOnValue, setIsOnValue] = useState<boolean>(false)

    return (
        <div className={"App"}>
            Uncontrolled OnOff
            <UncontrolledOnOff/>
            <UncontrolledOnOff/>
            <UncontrolledOnOff/>
            <hr/>
            OnOff
            <OnOff isOnValue={isOnValue} setIsOnValue={setIsOnValue}/>
            <OnOff isOnValue={isOnValue} setIsOnValue={setIsOnValue}/>
            <OnOff isOnValue={isOnValue} setIsOnValue={setIsOnValue}/>
            <hr/>
            <UncontrolledAccordion title={"Onclick Uncontrolled accordion"}/>
            <hr/>
            <Accordion title={"Onclick accordion"} collapsed={accordionIsCollapsed}
                       setAccordionIsCollapsed={setAccordionIsCollapsed}/>
            <hr/>
            Uncontrolled Rating
            <UncontrolledRating/>
            <hr/>
            Rating
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
        </div>
    );
}

export default App;
