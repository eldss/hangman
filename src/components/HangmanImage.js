import React from 'react';

import img0 from '../images/Hangman-0.png';
import img1 from '../images/Hangman-1.png';
import img2 from '../images/Hangman-2.png';
import img3 from '../images/Hangman-3.png';
import img4 from '../images/Hangman-4.png';
import img5 from '../images/Hangman-5.png';
import img6 from '../images/Hangman-6.png';
import '../styles/HangmanImage.css';

const HangmanImage = (props) => {
    const imgArray = [img0, img1, img2, img3, img4, img5, img6];
    Object.freeze(imgArray);
    return (
        <img src={imgArray[props.step]} alt={`Hangman, step ${props.step}`} />
    );
}

export default HangmanImage;