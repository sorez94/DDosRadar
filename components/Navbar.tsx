"use client"
import React, {useEffect, useState} from 'react';
import moment from 'moment-jalaali';

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Navbar = () => {
    const [currentDate, setCurrentDate] = useState<string>(moment().format("jYYYY/jM/jD"));
    const [currentTime, setCurrentTime] = useState<string>(moment().format("HH:mm:ss"));
    const [currentDay, setCurrentDay] = useState<string>(weekday[new Date().getDay()]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(moment().format("jYYYY/jM/jD"));
            setCurrentTime(moment().format("HH:mm:ss"));
            setCurrentDay(weekday[new Date().getDay()]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <header className="bg-[#02071D] p-4 flex justify-between items-center mx-8 my-4">
            <h1 className="text-[18px] font-semibold">TIC DDoS Radar</h1>
            <div className='flex items-center'>
                <div className='flex mr-6 items-center'>
                    <img src='/icons/calendar.png' alt='calendar' className='mr-2'/>
                    <p className="text-gray-400 text-[14px]">{currentDay} - {currentDate}</p>
                </div>
                <div className='flex items-center'>
                    <img src='/icons/clock.png' alt='clock' className='mr-2'/>
                    <p className="text-gray-400 text-[14px]">{currentTime}</p>
                </div>
            </div>
        </header>
    );
};

export default Navbar;