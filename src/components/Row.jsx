import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import Card from './Card';

function Row(props) {
    const { title, action, selector, platform } = props;
    const { data, status, error } = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action());
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