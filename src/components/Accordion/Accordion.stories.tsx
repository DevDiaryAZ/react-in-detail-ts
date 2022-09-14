import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion,
};

const callback = action('accordion mode change event fired')

export const CollapsedMode = () =>   <Accordion title={"Menu"} collapsed={true}
                                                setAccordionIsCollapsed={callback}/>
export const UncollapsedMode = () =>  <Accordion title={"Menu"} collapsed={false}
                                                 setAccordionIsCollapsed={callback}/>

export const ChangeCollapsedMode = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion title={"Menu"} collapsed={collapsed}
                      setAccordionIsCollapsed={setCollapsed}/>
}

