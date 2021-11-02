import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import FormContent from './FormContent';
import { addComment, getListComments } from '../../actions/CommentAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

function CommentForm() {
    const [isFormVisible, setFormVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const { addCommentResult } = useSelector((state) => state.commentReducer);
    const dispatch = useDispatch();
    const { id } = useParams();

    const handleForm = () => {
        if (isFormVisible) {
            setFormVisible(false);
        } else {
            setFormVisible(true);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            addComment({ name: name, email: email, body: body, postId: id })
        );
    };

    useEffect(() => {
        if (addCommentResult) {
            dispatch(getListComments(id));
            setName('');
            setEmail('');
            setBody('');
        }
    }, [addCommentResult, dispatch]);

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
                            onSubmit={(event) => handleSubmit(event)}
                        >
                            <FormContent
                                label={'Name: '}
                                placeholder={'Enter Name'}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                value={name}
                            />
                            <FormContent
                                label={'Email: '}
                                placeholder={'Enter Email'}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                value={email}
                            />
                            <FormContent
                                label={'Body: '}
                                placeholder={'Enter body'}
                                onChange={(event) =>
                                    setBody(event.target.value)
                                }
                                value={body}
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
