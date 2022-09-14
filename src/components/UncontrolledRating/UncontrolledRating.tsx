import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type PropsType = {
    defaultValue?: RatingValueType
    onClick?: () => void
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setValue: (value: RatingValueType) => void
    onClick?: () => void
}


export const UncontrolledRating = (props: PropsType) => {
    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return <div style={{display: "flex", gap: "10px"}}>
        <Star selected={value > 0} setValue={setValue} value={1} onClick={props.onClick}/>
        <Star selected={value > 1} setValue={setValue} value={2} onClick={props.onClick}/>
        <Star selected={value > 2} setValue={setValue} value={3} onClick={props.onClick}/>
        <Star selected={value > 3} setValue={setValue} value={4} onClick={props.onClick}/>
        <Star selected={value > 4} setValue={setValue} value={5} onClick={props.onClick}/>
    </div>
}

const Star = (props: StarPropsType) => {
    const onClickHandler = () => {
        props.setValue(props.value)
        props.onClick && props.onClick()
    }

    return <div>
        <span onClick={onClickHandler}>{props.selected ? <b>star</b> : 'star'}</span>
    </div>
}