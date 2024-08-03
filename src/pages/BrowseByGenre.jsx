import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../helper/axios';
import { requests } from '../helper/apiRequests';
import Card from '../components/Card';

function BrowseByGenre(props) {
    const { platform, genreid } = useParams();

    const [videosByGenre, setVideosByGenre] = useState(null);
    const [currentPlatform, setCurrentPlatform] = useState(null);

    const fetchVideosByGenre = async (platform, id) => {
        const response = await axios.get(requests.getDataByGenre(platform, id));
        setVideosByGenre(response.data.results);
    }

    const [genreList, setGenreList] = useState(null);

    const fetchGenreList = async (platform) => {
        const response = await axios.get(requests.getGenresList(platform));
        setGenreList(response.data.genres);
    }

    const handlePlatform = (e) => {
        fetchGenreList(e.target.value);
        setCurrentPlatform(e.target.value);
    }

    const handleGenre = (e) => {
        fetchVideosByGenre(currentPlatform, e.target.value);
    }

    useEffect(() => {
        fetchVideosByGenre(platform, genreid);
    }, []);




    return (
        <div className='py-28 px-4'>
            <div className='flex py-4'>
                <select onChange={handlePlatform}>
                    <option selected disabled>Select Type</option>
                    <option value="tv">Tv</option>
                    <option value="movie">Movie</option>
                </select>
                <select onChange={handleGenre}>
                    <option selected disabled>Select Genre</option>
                    {
                        genreList?.map((genre) => (
                            <option value={genre?.id}>{genre?.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className='flex gap-4 flex-wrap'>
                {
                    videosByGenre?.map((video) => (
                        <div key={video?.id} className='w-1/5'>
                            <Card video={video} platform={platform} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BrowseByGenre;