import React, { useEffect, useState, useRef } from 'react';



function randomColor(currentColor) {
    const color_list = ['red', 'green', 'blue'];

    const currentColor_index = color_list.indexOf(currentColor);
    //random 0 -> 2
    let randomIndex = Math.trunc(Math.random() * 3);

    while (currentColor_index === randomIndex) {
        randomIndex = Math.trunc(Math.random() * 3);
    }
    return color_list[randomIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');
    //change color every 1 second

    useEffect(() => {

        const colorInterval = setInterval(() => {

            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, [])


    return color;

}

export default useMagicColor;