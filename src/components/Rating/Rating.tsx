import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type PropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export const Rating = (props: PropsType) => {

    return <div style={{display: "flex", gap: "10px"}}>
        <Star selected={props.value > 0} value={1} setRatingValue={props.setRatingValue}/>
        <Star selected={props.value > 1} value={2} setRatingValue={props.setRatingValue}/>
        <Star selected={props.value > 2} value={3} setRatingValue={props.setRatingValue}/>
        <Star selected={props.value > 3} value={4} setRatingValue={props.setRatingValue}/>
        <Star selected={props.value > 4} value={5} setRatingValue={props.setRatingValue}/>
    </div>
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

const Star = (props: StarPropsType) => {
    return <div>
        <span onClick={()=>{props.setRatingValue(props.value)}}>{props.selected ? <b>star</b> : 'star'}</span>
    </div>
}