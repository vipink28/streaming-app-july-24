import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import Card from './Card';
import axios from '../helper/axios';
import { requests } from '../helper/apiRequests';

function Row(props) {
    const { title, action, selector, platform, genre } = props;
    const { data, status, error } = useSelector(genre ? (state) => state.tv.netflixOriginals : selector);
    const dispatch = useDispatch();
    const [videosByGenre, setVideosByGenre] = useState(null);

    const fetchVideosByGenre = async (platform, id) => {
        const response = await axios.get(requests.getDataByGenre(platform, id));
        setVideosByGenre(response.data.results);
    }


    useEffect(() => {
        if (genre) {
            fetchVideosByGenre(platform, genre.id);
        } else {
            dispatch(action());
        }
    }, [])

    return (
        <div className='py-4'>
            <h3 className='mb-3'>{title}</h3>

            <Swiper
                spaceBetween={20}
                slidesPerView={5}
            >
                {
                    genre ?
                        <>
                            {
                                videosByGenre ?
                                    videosByGenre.map((video) => (
                                        <SwiperSlide key={video.id}>
                                            <Card video={video} platform={platform} />
                                        </SwiperSlide>
                                    )) : ""
                            }
                        </>
                        :
                        <>
                            {
                                data ?
                                    data.results.map((video) => (
                                        <SwiperSlide key={video.id}>
                                            <Card video={video} platform={platform} />
                                        </SwiperSlide>
                                    )) : ""
                            }
                        </>
                }
            </Swiper>
        </div>
    );
}

export default Row;