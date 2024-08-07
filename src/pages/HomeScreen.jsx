import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import { fetchNowPlayingMovies, fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import { platformType } from '../helper/apiRequests';

function HomeScreen(props) {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(selectNetflixOriginals);
    const [randomIndex, setRandomIndex] = useState(0);


    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])

    useEffect(() => {
        if (data && data.results) {
            setRandomIndex(Math.floor(Math.random() * data.results.length));
            const intervalId = setInterval(() => {
                setRandomIndex(Math.floor(Math.random() * data.results.length));
            }, 30000);
            return () => clearInterval(intervalId);
        }
    }, [data]);

    return (
        <>
            {
                status === "success" ?
                    <Header video={data.results[randomIndex]} platform={platformType.tv} />
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


