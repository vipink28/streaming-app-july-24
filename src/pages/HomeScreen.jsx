import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import { fetchNowPlayingMovies } from '../features/movie/movieSlice';

function HomeScreen(props) {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(selectNetflixOriginals)
    useEffect(() => {
        dispatch(fetchNetflixOriginals());
        dispatch(fetchNowPlayingMovies());
    }, [])

    return (
        <>
            {
                status === "success" ?
                    <Header video={data.results[Math.floor(Math.random() * data.results.length)]} />
                    : "Loading"
            }
            <div className='px-4'>
                <Row title="Upcoming Movies" />
                <Row />
                <Row />
            </div>
        </>
    );
}

export default HomeScreen;