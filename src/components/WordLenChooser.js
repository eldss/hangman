import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';

import '../styles/WordLenChooser.css';

const WordLenChooser = (props) => {
    const isInvalidSubmit = props.lenLow > props.lenHigh;
    return (
        <div className="WordLenChooser">
            <Container className="form">
                <Form className="form-inline" onSubmit={props.submitHandler}>
                    <Form.Group controlId="minLength">
                        <Form.Label>Min Length</Form.Label>
                        <Form.Control as="select" name="min"
                            value={props.lenLow}
                            onChange={props.changeHandler} >
                            {createSelectOptions(props)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="maxLength">
                        <Form.Label>Max Length</Form.Label>
                        <Form.Control as="select" name="max"
                            value={props.lenHigh}
                            onChange={props.changeHandler}>
                            {createSelectOptions(props)}
                        </Form.Control>
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={isInvalidSubmit}>
                        Get Word
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

function createSelectOptions(props) {
    let options = [];
    for (let i = props.minLen; i <= props.maxLen; i++) {
        options.push(
            <option
                key={i}
                value={i}>
                {i}
            </option>
        );
    }
    return options;
}

export default WordLenChooser;