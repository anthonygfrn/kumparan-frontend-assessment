import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import FormContent from './FormContent';
import { addComment, getListComments } from '../../actions/CommentAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Column from '../layout/Column';
import Container from '../layout/Container';

function CommentForm() {
    const [isFormVisible, setFormVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const { addCommentResult } = useSelector((state) => state.commentReducer);
    const dispatch = useDispatch();
    const { id } = useParams();

    const handleForm = React.useCallback(() => {
        if (isFormVisible) {
            setFormVisible(false);
        } else {
            setFormVisible(true);
        }
    }, [setFormVisible]);

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
        <Container>
            <Column variant="mt-2">
                <Button
                    variant="mt-2 btn-light btn-outline-dark m-2"
                    onClick={handleForm}
                >
                    Add Post
                </Button>
            </Column>
            <Column variant="mu-2 mb-3">
                {isFormVisible && (
                    <Column>
                        <Form
                            className="border border-dark p-3 h-100"
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
                            <Button
                                variant="mt-2 btn-dark btn-outline-secondary m-2"
                                type="submit"
                                style={{ color: 'white' }}
                            >
                                Submit
                            </Button>
                        </Form>
                    </Column>
                )}
            </Column>
        </Container>
    );
}

export default CommentForm;
