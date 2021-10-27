import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function PostForm({ add, title, body, TitleValue, BodyValue }) {
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
                            className="border border-dark p-3 h-100"
                            onSubmit={add}
                        >
                            <Form.Group className="mb-3">
                                <Form.Label>Title: </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter title"
                                    onChange={title}
                                    value={TitleValue}
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

export default PostForm;
