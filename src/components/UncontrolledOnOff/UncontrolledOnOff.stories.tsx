import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: 'Uncontrolled OnOff stories',
    component: UncontrolledOnOff,
};

const callback = action('OnOff mode change event fired')

export const OnMode = () =>  <UncontrolledOnOff defaultValue={true} onChange={callback}/>
export const OffMode = () =>  <UncontrolledOnOff defaultValue={false} onChange={callback}/>


