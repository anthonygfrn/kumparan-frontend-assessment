import React from 'react';
import Form from 'react-bootstrap/Form';

function FormContent({ label, placeholder, onChange, value }) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </Form.Group>
    );
}

export default FormContent;
