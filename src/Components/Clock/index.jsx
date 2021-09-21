import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';

Clock.propTypes = {};


function Clock(props) {
    //sử dụng custom hooks useClock

    const { timeString } = useClock();

    return (
        <p style={{ fontSize: '44px' }}>{timeString}</p>
    );
}

export default Clock;