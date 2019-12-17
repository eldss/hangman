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
        <div className="HangmanImage">
            <img src={imgArray[props.step]} alt={`Hangman, step ${props.step}`} />
            <br/>
            <small>
              Images provided by&nbsp;
              <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>,&nbsp;
              <a href="https://commons.wikimedia.org/w/index.php?curid=892208">Link</a>
            </small>
        </div>
    );
}

export default HangmanImage;