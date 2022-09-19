import React, {useState} from "react";
import {ItemType} from "../Accordion/Accordion";
import s from "./Select.module.css"

type PropsType = {
    onChangeHandler: (value: any) => void
    items: ItemType[]
}

export const Select = (props: PropsType) => {
    const [selectValue, setSelectValue] = useState<string>(props.items[0] ? props.items[0].title : '')
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

    return <div className={s.select}>
        <input type="text" readOnly value={selectValue ? selectValue : ''} onClick={() => {
            setIsCollapsed(!isCollapsed)
        }} />
        {!isCollapsed && <div className={s.items}>{props.items.map((item, index) => <div key={index}
                                                                     onClick={() => {
                                                                         setIsCollapsed(!isCollapsed)
                                                                         setSelectValue(item.title)
                                                                         props.onChangeHandler(item.value)
                                                                     }}>{item.title}</div>)}</div>}
    </div>
}