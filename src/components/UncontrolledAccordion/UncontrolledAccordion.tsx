import React, {useState} from "react";

type AccordionTitlePropsType = {
    title: string
    setIsCollapsed: (isCollapsed: boolean) => void
    isCollapsed: boolean
}

type PropsType = {
    title: string
}

export const UncontrolledAccordion = (props: PropsType) => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return <div>
        <AccordionTitle title={props.title} setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed}/>
        {!isCollapsed && <AccordionBody/>}
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