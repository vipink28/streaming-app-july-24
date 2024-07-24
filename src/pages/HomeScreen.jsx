import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';

function HomeScreen(props) {
    const dispatch = useDispatch();
    const nfData = useSelector(selectNetflixOriginals)
    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])

    return (
        <div>
            Home screen
        </div>
    );
}

export default HomeScreen;