import React, { useEffect } from 'react';
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

    fetchVideosByGenre = async () => {
        const response = await axios.get(requests.getDataByGenre())
    }



    useEffect(() => {
        if (genre) {

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
                    data ?
                        data.results.map((video) => (
                            <SwiperSlide key={video.id}>
                                <Card video={video} platform={platform} />
                            </SwiperSlide>
                        )) : ""
                }
            </Swiper>
        </div>
    );
}

export default Row;