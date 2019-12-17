import React from 'react';
import { Container } from 'react-bootstrap';

import '../styles/Game.css';
import HangmanImage from './HangmanImage';
import Word from './Word';
import ButtonArray from './ButtonArray';

const Game = (props) => {
    return (
        <Container className="Game">
            <h1>Hangman</h1>
            <HangmanImage step={0} />
            <Word word="Hello" correctGuesses={new Set(['H', 'O'])} />
            <ButtonArray />
        </Container>
    );
}

export default Game;