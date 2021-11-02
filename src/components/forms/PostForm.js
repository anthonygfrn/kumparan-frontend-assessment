import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import FormContent from './FormContent';
import { addPost, getListPosts } from '../../actions/PostAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

function PostForm() {
    const [isFormVisible, setFormVisible] = useState(false);
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const { addPostResult } = useSelector((state) => state.postReducer);
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
        console.log('1. masuk handle submit');
        dispatch(addPost({ title: title, body: body, userId: id }));
    };

    useEffect(() => {
        if (addPostResult) {
            console.log('5. Masuk component did update');
            dispatch(getListPosts(id));
            setBody('');
            setTitle('');
        }
    }, [addPostResult, dispatch]);

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
