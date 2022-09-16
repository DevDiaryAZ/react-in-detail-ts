import React from "react";
import {ItemType} from "../Accordion/Accordion";

type PropsType = {
    onChangeHandler: (value: any) => void
    items: ItemType[]
}

export const Select = (props: PropsType) => {
    return <div>
        {props.items.map((item, index)=><div key={index} onClick={()=>props.onChangeHandler(item.value)}>{item.title}</div>)}
    </div>
}