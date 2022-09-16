import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion,
};

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const CollapsedMode = () => <Accordion title={"Menu"}
                                              collapsed={true}
                                              setAccordionIsCollapsed={callback}
                                              items={[]} onClickHandler={onClickCallback}/>
export const UncollapsedMode = () => <Accordion title={"Menu"}
                                                collapsed={false}
                                                setAccordionIsCollapsed={callback}
                                                items={[{title: "Alena", value: 1}, {
                                                    title: "Natasha",
                                                    value: 2
                                                }, {title: "Alisa", value: 3}]}
                                                onClickHandler={onClickCallback}/>

export const ChangeCollapsedMode = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion title={"Menu"}
                      collapsed={collapsed}
                      setAccordionIsCollapsed={setCollapsed}
                      items={[{title: "Alena", value: 1}, {title: "Natasha", value: 2}, {title: "Alisa", value: 3}]}
                      onClickHandler={(id) => {
                          alert(`user with id ${id} - be happy!`)
                      }}/>
}

