import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {

};

function getRandomColor() {
    const colorList = ['deeppink', 'blue', 'yellow', 'red', 'brown'];
    // hàm round làm tròn
    const randomIndex = Math.round(Math.random() * 5);
    return colorList[randomIndex];
}

function ColorBox() {
    //xem color hiện tại 
    // const initColor = localStorage.getItem('box_color') || 'green';
    // console.log(initColor);  mỗi lần load thì sẽ in lại
    //Nếu chưa có init thì lấy green
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'green';
        // in đúng 1 lần khi khởi tạo, load ko in nữa
        console.log(initColor);
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }
    return (
        <div
            className="Color-Box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >

        </div>
    );
}

export default ColorBox;