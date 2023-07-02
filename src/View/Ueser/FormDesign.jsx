import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function FormDesign(props) {
    const { onSubmit, handleChange, addUsers } = props
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Enter your full name:</Form.Label>
                    <Form.Control
                        placeholder="Enter your full name"  
                        type="text" 
                        name='address'
                        value={addUsers.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                <Form.Label>Enter your address:</Form.Label>
                <Form.Control 
                    placeholder="Enter your your address" 
                    type="text" 
                    name='address'
                    value={addUsers.address}
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Enter your Mobile:</Form.Label>
                <Form.Control 
                    placeholder="Enter your age"    
                    type="text" 
                    name="mobile"
                    value={addUsers.number}
                    onChange={handleChange}
                />
                </Form.Group>
                <Button className="mt-3" variant="primary" type="submit" onSubmit={onSubmit}>
                    submit form
                </Button>
            </Form>
        </>
    )
}
