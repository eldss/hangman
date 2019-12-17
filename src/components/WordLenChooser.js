import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

import '../styles/WordLenChooser.css';

const WordLenChooser = (props) => {

    return ( 
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlID="minLength">
                    <Form.Label>Minimum Length</Form.Label>
                    <Form.Control as="select">
                        {createSelectOptions(props)}
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlID="maxLength">
                    <Form.Label>Maximum Length</Form.Label>
                    <Form.Control as="select">
                        {createSelectOptions(props)}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Get Word</Button>
            </Form.Row>
        </Form>
    );
}

function createSelectOptions(props) {
    let options = [];
    for (let i = props.minLen; i <= props.maxLen; i++) {
        options.push(
            <option key={i}>{i}</option>
        );
    }
    return options;
}

export default WordLenChooser;