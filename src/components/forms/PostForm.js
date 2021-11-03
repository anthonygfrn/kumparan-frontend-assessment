import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from '../../components/ui/Button';
import { useState, useEffect } from 'react';
import FormContent from './FormContent';
import { addPost, getListPosts } from '../../actions/PostAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Column from '../layout/Column';
import Container from '../layout/Container';

function PostForm() {
    const [isFormVisible, setFormVisible] = useState(false);
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const { addPostResult } = useSelector((state) => state.postReducer);
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
        dispatch(addPost({ title: title, body: body, userId: id }));
    };

    useEffect(() => {
        if (addPostResult) {
            dispatch(getListPosts(id));
            setBody('');
            setTitle('');
        }
    }, [addPostResult, dispatch]);

    return (
        <Container>
            <Button
                variant="mt-2 btn-light btn-outline-dark m-2"
                onClick={handleForm}
            >
                Add Post
            </Button>
            <Column className="mt-2 mb-3">
                {isFormVisible && (
                    <Column>
                        <Form
                            className="border border-dark p-3 h-100"
                            onSubmit={(event) => handleSubmit(event)}
                        >
                            <FormContent
                                type="text"
                                label={'Title: '}
                                placeholder={'Enter Title'}
                                onChange={(event) =>
                                    setTitle(event.target.value)
                                }
                                value={title}
                            />
                            <FormContent
                                type="text"
                                label={'Body: '}
                                placeholder={'Enter Body'}
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

export default PostForm;
