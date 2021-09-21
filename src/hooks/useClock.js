import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


// đây là custom hooks 



function formatDate(data) {
    if (!data) return '';
    const hours = `0${data.getHours()}`.slice(-2);
    const minutes = `0${data.getMinutes()}`.slice(-2);
    const seconds = `0${data.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;

}

function useClock(props) {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();

            const newTimeString = formatDate(now);

            setTimeString(newTimeString);
        }, 1000)


        return () => {
            //cleanup
            console.log('Clock cleanup');
            clearInterval(clockInterval);

        }
    }, []);

    return { timeString };
}

export default useClock;