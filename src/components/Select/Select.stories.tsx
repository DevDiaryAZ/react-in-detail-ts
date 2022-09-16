import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from "./Select";



export default {
    title: 'Select stories',
    component: Select,
};

const onClickCallback = action('some item was clicked')

export const CollapsedModeSelect = () => <Select items={[]} onChangeHandler={onClickCallback}/>
export const UncollapsedModeSelect = () => <Select items={[{title: "Alena", value: 1}, {
                                                    title: "Natasha",
                                                    value: 2
                                                }, {title: "Alisa", value: 3}]}
                                                   onChangeHandler={onClickCallback}/>


