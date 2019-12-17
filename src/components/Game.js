import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import '../styles/Game.css';
import HangmanImage from './HangmanImage';
import Word from './Word';
import ButtonArray from './ButtonArray';
import WordLenChooser from './WordLenChooser';


const Game = (props) => {
    const [rightGuesses, setRightGuesses] = useState(new Set([]));
    const [wrongGuesses, setWrongGuesses] = useState(new Set([]));

    /**
     * Checks if the game has ended.
     * @returns {boolean}
     */
    const checkEndGame = () => {
        const MAX_ATTEMPTS = 6;
        return (rightGuesses.size === props.word.length)
            || (wrongGuesses.size === MAX_ATTEMPTS);
    }

    /**
     * Handles click events for the letter buttons.
     * @param {event} evt A click event
     */
    const guessClickHandler = (evt) => {
        // Update state values
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
            <WordLenChooser maxLen={props.maxLen} minLen={props.minLen} />
            <HangmanImage step={wrongGuesses.size} />
            <Word
                word={props.word}
                rightGuesses={rightGuesses} />
            <ButtonArray
                right={rightGuesses}
                wrong={wrongGuesses}
                gameOver={checkEndGame()}
                onClick={guessClickHandler} />
        </Container>
    );
}

export default Game;