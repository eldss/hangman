import React from 'react';

import '../styles/Word.css';

const Word = (props) => {
    const len = props.word.length;
    const winner = props.gameOver && (props.rightGuesses.size === len);
    let letters = new Array(len).fill('_');
    for (let i = 0; i < len; i++) {
        let char = props.word.charAt(i);
        if (props.rightGuesses.has(char.toUpperCase())) {
            letters[i] = char;
        }
    }



    return ( 
        <div className="Word">
            <h2 className={winner ? "text-success" : ""}>{letters.join("")}</h2>
            {(props.gameOver && !winner) && 
                <h3 className="text-danger">word was: {props.word}</h3>
            }
        </div>
    );
}

export default Word;