import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import Header from '../components/Header';

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
                    <Header video={data.results[Math.floor(Math.random() * data.results.length)]} />
                    : "Loading"
            }
        </>
    );
}

export default HomeScreen;