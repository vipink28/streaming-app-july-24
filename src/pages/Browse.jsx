import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { platformType } from '../helper/apiRequests';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import { fetchNowPlayingMovies, selectNowPlayingMovies } from '../features/movie/movieSlice';

function Browse(props) {
    const dispatch = useDispatch();
    const { platform } = useParams();
    const { data, status, error } = useSelector(platform === "tv" ? selectNetflixOriginals : selectNowPlayingMovies);
    useEffect(() => {
        if (platform === platformType.tv) {
            dispatch(fetchNetflixOriginals());
        } else {
            dispatch(fetchNowPlayingMovies());
        }
    }, [platform])

    return (
        <>
            {
                status === "success" ?
                    <Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platform} />
                    : "Loading"
            }
        </>
    );
}

export default Browse;