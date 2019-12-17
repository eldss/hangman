import React from 'react';
import {Button} from 'react-bootstrap';

import '../styles/LetterButton.css';

const LetterButton = (props) => {
    return ( 
        <Button
        variant="outline-warning"
        className="LetterButton">
            {props.letter}
        </Button>
    );
}
 
export default LetterButton;