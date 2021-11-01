import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import FormContent from './FormContent';

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
                            className="border border-dark p-3 h-100"
                            onSubmit={add}
                        >
                            <FormContent
                                label={'Title: '}
                                placeholder={'Enter Title'}
                                onChange={title}
                                value={TitleValue}
                            />
                            <FormContent
                                label={'Body: '}
                                placeholder={'Enter Body'}
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

export default PostForm;
