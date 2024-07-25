import React from 'react';

function Header(props) {
    const { video } = props;
    console.log(video);
    return (
        <div className='relative h-dvh'>
            <img className='w-full h-full object-cover object-center block' src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`} alt="" />
            <div className='absolute left-60 top-1/2 -translate-y-1/2 max-w-md'>
                <h1>{video?.name || video?.original_name}</h1>
                <p>{video?.overview}</p>
            </div>
        </div>
    );
}

export default Header;