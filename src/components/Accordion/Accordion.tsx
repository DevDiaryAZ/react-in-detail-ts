import React from "react";

type AccordionTitlePropsType = {
    title: string
    setIsCollapsed: (isCollapsed: boolean) => void
    isCollapsed: boolean
}

type PropsType = {
    title: string
    collapsed: boolean
    setAccordionIsCollapsed: (collapsed: boolean) => void
}

export const Accordion = (props: PropsType) => {

    return <div>
        <AccordionTitle title={props.title} setIsCollapsed={props.setAccordionIsCollapsed}
                        isCollapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={() => {
        props.setIsCollapsed(!props.isCollapsed)
    }}>{props.title}</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}