import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'Uncontrolled Rating stories',
    component: UncontrolledRating,
};

const callback = action('Uncontrolled Rating mode change event fired')

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onClick={callback}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onClick={callback}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onClick={callback}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onClick={callback}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onClick={callback}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onClick={callback}/>

// export const ChangeRating = () => {
//     const [rating, setRating] = useState<RatingValueType>(5)
//     return <Rating value={rating} setRatingValue={setRating}/>
// }
