import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff, OnOffType} from "./OnOff";


export default {
    title: 'OnOff stories',
    component: OnOff,
};

export const OnMode = () => <OnOff isOnValue={true}
                                   setIsOnValue={action('on or off clicked')}/>
export const OffMode = () => <OnOff isOnValue={false}
                                   setIsOnValue={action('on or off clicked')}/>

export const ChangeOnOff = () => {
    const [onOffValue, setOnOffValue] = useState<boolean>(false)
    return <OnOff isOnValue={onOffValue}
                  setIsOnValue={setOnOffValue}/>
}

