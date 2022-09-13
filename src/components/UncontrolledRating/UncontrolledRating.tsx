import React, {useState} from "react";

type PropsType = {}

type StarPropsType = {
    selected: boolean
    value: number
    setValue: (value: number) => void
}


export const UncontrolledRating = (props: PropsType) => {
    const [value, setValue] = useState(1)

    return <div style={{display: "flex", gap: "10px"}}>
        <Star selected={value > 0} setValue={setValue} value={1}/>
        <Star selected={value > 1} setValue={setValue} value={2}/>
        <Star selected={value > 2} setValue={setValue} value={3}/>
        <Star selected={value > 3} setValue={setValue} value={4}/>
        <Star selected={value > 4} setValue={setValue} value={5}/>
    </div>
}

const Star = (props: StarPropsType) => {
    return <div>
        <span onClick={() => {
            props.setValue(props.value)
        }}>{props.selected ? <b>star</b> : 'star'}</span>
    </div>
}