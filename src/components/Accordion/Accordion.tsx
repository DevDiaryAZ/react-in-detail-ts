import React from "react";

export type ItemType = {
    title:string
    value:any
}

type AccordionTitlePropsType = {
    title: string
    setIsCollapsed: (isCollapsed: boolean) => void
    isCollapsed: boolean
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClickHandler: (value:any)=>void
}

type PropsType = {
    title: string
    collapsed: boolean
    setAccordionIsCollapsed: (collapsed: boolean) => void
    items: ItemType[]
    onClickHandler: (value:any)=>void
}

export const Accordion = (props: PropsType) => {

    return <div>
        <AccordionTitle title={props.title} setIsCollapsed={props.setAccordionIsCollapsed}
                        isCollapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody items={props.items} onClickHandler={props.onClickHandler}/>}
    </div>
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={() => {
        props.setIsCollapsed(!props.isCollapsed)
    }}>{props.title}</h3>
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return <ul>
        {props.items.map((item, index) => <li key={'user+' + index} onClick={()=>{props.onClickHandler(item.value)}}>{item.title}</li>)}
    </ul>
}