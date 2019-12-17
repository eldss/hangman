import React from 'react';

import '../styles/Word.css';

const Word = (props) => {
    let len = props.word.length;
    let letters = new Array(len).fill('_');

    for (let i = 0; i < len; i++) {
        let char = props.word.charAt(i);
        if (props.displayChars.has(char.toUpperCase())) {
            letters[i] = char;
        }
    }

    return ( 
        <h2 className="Word">{letters.join("")}</h2>
    );
}
 
export default Word;