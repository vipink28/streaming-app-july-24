import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import { fetchNowPlayingMovies, fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import { platformType } from '../helper/apiRequests';

function HomeScreen(props) {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(selectNetflixOriginals)
    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])

    return (
        <>
            {
                status === "success" ?
                    <Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platformType.tv} />
                    : "Loading"
            }
            <div className='px-4'>
                <Row title="Upcoming Movies" action={fetchUpcomingMovies} selector={selectUpcomingMovies} platform={platformType.movie} />
                <Row title="Netflix Originals" action={fetchNetflixOriginals} selector={selectNetflixOriginals} platform={platformType.tv} />
            </div>
        </>
    );
}

export default HomeScreen;


