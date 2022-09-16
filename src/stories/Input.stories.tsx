import React, {useRef, useState} from "react";
import {action} from '@storybook/addon-actions';

export default {
    title: 'input'
};

export const UncontrolledInput = () => <input/>;
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("");
    return <><input value={value} onChange={(e) => setValue(e.currentTarget.value)}/> - {value}</>
};
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null)
    return <><input ref={inputRef}/>
        <button onClick={() => {
            const el = inputRef.current as HTMLInputElement
            setValue(el.value)
        }
        }>Save
        </button>
        - {value}</>
};
export const ControlledInputWithFixedValue = () => <input value={"super value"}/>;

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");
    return <><input value={parentValue} onChange={(e) => {
        setParentValue(e.currentTarget.value)
    }}/>
    </>
};
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    return <><input type="checkbox" checked={parentValue} onChange={(e) => {
        setParentValue(e.currentTarget.checked)
    }}/></>
};
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);

    return <><select value={parentValue} onChange={(e) => {
        setParentValue(e.currentTarget.value)
    }}>
        <option>none</option>
        <option value={"Moscow"}>Moscow</option>
        <option value={"Minsk"}>Minsk</option>
        <option value={"New York"}>New York</option>
    </select> - {parentValue}</>
};