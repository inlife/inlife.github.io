'use client';

import { useEffect, useState } from 'react';

export default () => {
    const [year, setYear] = useState('2025');

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <div className='mt-16 pt-8 border-t border-white/20'>
            <div className='text-center text-gray-400 text-sm'>
                made with <span className='text-red-400'><i className='fa fa-heart'></i></span> {year}
            </div>
        </div>
    )
}
