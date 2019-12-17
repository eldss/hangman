import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import '../styles/Game.css';
import HangmanImage from './HangmanImage';
import Word from './Word';
import ButtonArray from './ButtonArray';
import WordLenChooser from './WordLenChooser';

const wordList = require('word-list-json');

const Game = (props) => {
    const MAX_LEN = 11;
    const MIN_LEN = 2;

    const [word, setWord] = useState(getWord(MIN_LEN, MAX_LEN));
    const [lenLow, setLenLow] = useState(MIN_LEN);
    const [lenHigh, setLenHigh] = useState(MAX_LEN);
    const [rightGuesses, setRightGuesses] = useState(new Set([]));
    const [wrongGuesses, setWrongGuesses] = useState(new Set([]));

    /**
     * Checks if the game has ended.
     * @returns {boolean}
     */
    const checkEndGame = () => {
        const MAX_ATTEMPTS = 6;
        return (rightGuesses.size === word.length)
            || (wrongGuesses.size === MAX_ATTEMPTS);
    }

    /**
     * Handles click events for the letter buttons.
     * @param {event} evt A click event
     */
    const guessClickHandler = (evt) => {
        // Update state values
        const char = evt.target.innerHTML;
        if (word.includes(char)) {
            setRightGuesses(prev => new Set(prev).add(char));
        } else {
            setWrongGuesses(prev => new Set(prev).add(char));
        }
    }

    const submitHandler = (evt) => {
        setWord(getWord(lenLow, lenHigh));
        setRightGuesses(new Set([]));
        setWrongGuesses(new Set([]));
        evt.preventDefault();
    }

    const changeHandler = (evt) => {
        const name = evt.target.name;
        if (name === "min") {
            setLenLow(parseInt(evt.target.value));
        } else {
            setLenHigh(parseInt(evt.target.value))
        }
    }

    return (
        <Container className="Game">
            <h1>Hangman</h1>
            <WordLenChooser
                maxLen={MAX_LEN}
                minLen={MIN_LEN}
                lenLow={lenLow}
                lenHigh={lenHigh}
                changeHandler={changeHandler}
                submitHandler={submitHandler} />
            {/* I could not make the following work within the form for some reason. */}
            <small className={lenLow > lenHigh ? "text-danger" : "d-none"}>
                max must be greater than or equal to min
            </small>
            <HangmanImage
                step={wrongGuesses.size} />
            <Word
                word={word}
                rightGuesses={rightGuesses}
                gameOver={checkEndGame()} />
            <ButtonArray
                right={rightGuesses}
                wrong={wrongGuesses}
                gameOver={checkEndGame()}
                onClick={guessClickHandler} />
        </Container>
    );
}

function getWord(minLen, maxLen) {
    // From https://www.npmjs.com/package/word-list-json:
    // "wordlist is sorted by length, in addition to the usual length property the
    // array also has a 'lengths' property which is a dict with keys of word
    // lengths and values which are the array index after the last word of that length
    // e.g. what the array length would be if it had no words with a longer length."
    let maxIndex = wordList.lengths[maxLen];
    let minIndex;
    if (minLen === 2) {
        minIndex = 0;
    } else {
        minIndex = wordList.lengths[minLen - 1];
    }
    // The following line gets a random index somewhere in the range of the length
    // of the subarray from [minIndex:maxIndex], then adds the minIndex to that
    // value - ensuring the range starts at the correct index.
    let index = Math.floor((Math.random() * (maxIndex - minIndex) + minIndex));
    return wordList[index].toUpperCase();
}

export default Game;