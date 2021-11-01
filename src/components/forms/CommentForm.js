import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import FormContent from './FormContent';

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
        <div>
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
                            <FormContent
                                label={'Name: '}
                                placeholder={'Enter Name'}
                                onChange={name}
                                value={NameValue}
                            />
                            <FormContent
                                label={'Email: '}
                                placeholder={'Enter Email'}
                                onChange={email}
                                value={EmailValue}
                            />
                            <FormContent
                                label={'Body: '}
                                placeholder={'Enter body'}
                                onChange={body}
                                value={BodyValue}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CommentForm;
