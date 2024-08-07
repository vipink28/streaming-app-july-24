import React, { useEffect, useState } from 'react';
import { IMG_URL } from '../helper/apiRequests';
import Ratings from './Ratings';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderDetails, selectHeaderDetails } from '../features/common/commonSlice';
import Genres from './Genres';
import VideoPlayer from './VideoPlayer';
import { Link, useNavigate } from 'react-router-dom';

function Header(props) {
    const { video, platform } = props;
    const { data, status, error } = useSelector(selectHeaderDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showVideo, setShowVideo] = useState(false);
    const handleVideo = () => {
        setShowVideo(true);
    }

    useEffect(() => {
        if (video) {
            dispatch(fetchHeaderDetails({ type: platform, id: video.id }))
        }
    }, [video])

    return (
        <div className='relative h-dvh'>
            {
                showVideo ?
                    <VideoPlayer videos={data?.videos.results} />
                    :
                    <>
                        <img className='w-full h-full object-cover object-center block' src={`${IMG_URL + data?.backdrop_path}`} alt="" />
                        <div className='text-white absolute left-20 z-10 top-1/2  -translate-y-1/2 max-w-md'>
                            <h1 className='font-display text-6xl mb-4'>{data?.name || data?.original_name || data?.title || data?.original_title}</h1>
                            <h3 className='font-alternate text-yellow-500 text-3xl mb-4'>{data?.tagline}</h3>
                            <p className='text-xl mb-4'>{data?.overview}</p>
                            <Genres genres={data?.genres} />
                            <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count} />
                            <div className='flex gap-3'>
                                <button className='px-4 py-3 bg-primary-600 text-white' onClick={handleVideo}>Play</button>
                                <Link to={`/details/${platform}/${data?.id}`} className='px-4 py-3 bg-primary-600 text-white' >More Info</Link>
                            </div>
                        </div>
                        <div className='absolute bg-gradient-to-r from-slate-950 to-transparent h-full left-0 top-0 w-1/2'></div>
                    </>
            }
        </div>
    );
}

export default Header;



