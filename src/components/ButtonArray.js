import React from 'react';
import {Container} from 'react-bootstrap';

import '../styles/ButtonArray.css';
import LetterButton from './LetterButton';

const ButtonArray = (props) => {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const btns = [...alpha].map(letter => 
        <LetterButton key={letter} letter={letter} />
    );
    return ( 
        <Container className="ButtonArray">
            {btns}
        </Container>
    );
}
 
export default ButtonArray;