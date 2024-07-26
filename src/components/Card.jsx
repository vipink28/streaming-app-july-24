import React from 'react';
import { IMG_URL } from '../helper/apiRequests';

function Card(props) {
    const { video } = props;
    return (
        <div className='rounded-sm'>
            <img className='w-full block' src={`${IMG_URL + video?.backdrop_path}`} alt="" />
        </div>
    );
}

export default Card;