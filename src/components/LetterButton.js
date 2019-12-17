import React from 'react';
import {Button} from 'react-bootstrap';

import '../styles/LetterButton.css';

const LetterButton = (props) => {
    return ( 
        <Button
        variant={props.variant}
        disabled={props.guessed}
        className="LetterButton"
        onClick={props.onClick}>
            {props.letter}
        </Button>
    );
}
 
export default LetterButton;