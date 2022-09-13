import React, {useState} from "react";

type PropsType = {
}

export const OnOff = (props: PropsType) => {

    console.log("OnOff rendering!")

    const [isOn, setIsOn] = useState(false)

    const onStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        backgroundColor: isOn ? "green" : "white"
    }
    const offStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        backgroundColor: isOn ? "white" : "red"
    }
    const indicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        border: "1px solid black",
        marginLeft: "10px",
        backgroundColor: isOn ? "green" : "red"
    }

    const onClickHandler = (isOnValue: boolean) => {
        setIsOn(isOnValue);
    }

    return <div>
        <div style={onStyle} onClick={() => onClickHandler(true)}>On</div>
        <div style={offStyle} onClick={() => onClickHandler(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}