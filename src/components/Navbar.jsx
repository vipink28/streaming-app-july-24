import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='flex px-4 py-3 items-center'>
            <div className='max-w-40'>
                <h4 className='text-lg font-bold'>Streaming App</h4>
            </div>
            <div className='flex gap-3'>
                <Link to="/" className='px-2 text-violet-950 font-medium'>Home</Link>
                <Link to="/tv" className='px-2 text-violet-950 font-medium'>Tv Shows</Link>
                <Link to="/movie" className='px-2 text-violet-950 font-medium'>Movies</Link>
                <Link to="/browse" className='px-2 text-violet-950 font-medium'>Browse By Genre</Link>
            </div>
        </div>
    );
}

export default Navbar;