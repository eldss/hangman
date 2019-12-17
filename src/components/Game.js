import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import '../styles/Game.css';
import HangmanImage from './HangmanImage';
import Word from './Word';
import ButtonArray from './ButtonArray';


const Game = (props) => {
    const [rightGuesses, setRightGuesses] = useState(new Set([]));
    const [wrongGuesses, setWrongGuesses] = useState(new Set([]));

    const guessClickHandler = (evt) => {
        const char = evt.target.innerHTML;
        if (props.word.includes(char)) {
            setRightGuesses(prev => new Set(prev).add(char));
        } else {
            setWrongGuesses(prev => new Set(prev).add(char));
        }
    }

    return (
        <Container className="Game">
            <h1>Hangman</h1>
            <HangmanImage step={wrongGuesses.size} />
            <Word word={props.word} rightGuesses={rightGuesses} />
            <ButtonArray
            right={rightGuesses}
            wrong={wrongGuesses}
            onClick={guessClickHandler}
            />
        </Container>
    );
}

export default Game;