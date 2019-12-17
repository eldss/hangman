import React from 'react';
import { Container } from 'react-bootstrap';

import '../styles/ButtonArray.css';
import LetterButton from './LetterButton';

const ButtonArray = (props) => {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let guessed;
    let type;  // String corresponding to Bootstrap colors
    console.log(props.right);
    console.log(props.wrong);
    const btns = [...alpha].map(letter => {
        if (props.right.has(letter)) {
            type = "success";
            guessed = true;
        } else if (props.wrong.has(letter)) {
            type = "danger";
            guessed = true;
        } else {
            type = "outline-warning";
            guessed = false;
        }

        return (<LetterButton
            key={letter}
            letter={letter}
            variant={type}
            guessed={guessed}
            onClick={props.onClick}
        />
        );
    });
    return (
        <Container className="ButtonArray">
            {btns}
        </Container>
    );
}

export default ButtonArray;