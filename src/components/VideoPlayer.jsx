import React, { useEffect, useState } from 'react';

function VideoPlayer(props) {
    const { videos } = props;
    const [trailer, setTrailer] = useState(null);
    console.log(trailer);
    useEffect(() => {
        if (videos) {
            let filteredVideo = videos.find((item) => item.type === "Trailer");
            setTrailer(filteredVideo);
        }
    }, [videos])

    return (
        <div>
            <iframe className='w-full h-dvh' src={`https://www.youtube.com/embed/${trailer?.key}?mute=1&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
}

export default VideoPlayer;