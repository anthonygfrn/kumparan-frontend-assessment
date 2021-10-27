import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function CommentForm({
    add,
    name,
    email,
    body,
    NameValue,
    EmailValue,
    BodyValue,
}) {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleForm = () => {
        if (isFormVisible) {
            setFormVisible(false);
        } else {
            setFormVisible(true);
        }
    };

    return (
        <>
            <div className="mt-2">
                <button
                    className="btn btn-outline-dark m-2"
                    onClick={handleForm}
                >
                    <i className="fa fa-caret-left fa-fw"></i> Add Post{' '}
                </button>
            </div>
            <div className="mt-2">
                {isFormVisible && (
                    <div>
                        <Form
                            className="border border-primary p-3 h-100"
                            onSubmit={add}
                        >
                            <Form.Group className="mb-3">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    onChange={name}
                                    value={NameValue}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email: </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter email"
                                    onChange={email}
                                    value={EmailValue}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Body: </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter body"
                                    onChange={body}
                                    value={BodyValue}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                )}
            </div>
        </>
    );
}

export default CommentForm;
