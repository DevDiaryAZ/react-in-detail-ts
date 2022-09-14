import React from "react";

export type OnOffType = {
    isOnValue: boolean
    setIsOnValue: (isOnValue: boolean) => void
}

export const OnOff = (props: OnOffType) => {

    const onStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        backgroundColor: props.isOnValue ? "green" : "white"
    }
    const offStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        backgroundColor: props.isOnValue ? "white" : "red"
    }
    const indicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        border: "1px solid black",
        marginLeft: "10px",
        backgroundColor: props.isOnValue ? "green" : "red"
    }

    const onClickHandler = (isOnValue: boolean) => {
        props.setIsOnValue(isOnValue);
    }

    return <div>
        <div style={onStyle} onClick={() => onClickHandler(true)}>On</div>
        <div style={offStyle} onClick={() => onClickHandler(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}