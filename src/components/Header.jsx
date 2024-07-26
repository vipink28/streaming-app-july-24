import React from 'react';
import { IMG_URL } from '../helper/apiRequests';

function Header(props) {
    const { video } = props;

    return (
        <div className='relative h-dvh'>
            <img className='w-full h-full object-cover object-center block' src={`${IMG_URL + video?.backdrop_path}`} alt="" />
            <div className='text-white absolute left-20 z-10 top-1/2  -translate-y-1/2 max-w-md'>
                <h1>{video?.name || video?.original_name || video?.title || video?.original_title}</h1>
                <p>{video?.overview}</p>
            </div>

            <div className='absolute bg-gradient-to-r from-slate-950 to-transparent h-full left-0 top-0 w-1/2'></div>
        </div>
    );
}

export default Header;


