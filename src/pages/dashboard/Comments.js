import PageContainer from '../../components/layout/Container';
import Title from '../../components/ui/Title';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from '../../components/ui/Button';
import CommentForm from '../../components/forms/CommentForm';
import { useDispatch, useSelector } from 'react-redux';
import {
    getListComments,
    deleteComment,
    updateComment,
} from '../../actions/CommentAction';

function Comments() {
    const { id } = useParams();
    const [selectedComment, setSelectedComment] = useState(0);
    const [isEditFormVisible, setEditFormVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const {
        getListCommentsResult,
        getListCommentsLoading,
        getListCommentsError,
        deleteCommentResult,
        updateCommentResult,
    } = useSelector((state) => state.commentReducer);
    const dispatch = useDispatch();

    const handleShow = (comment) => {
        setSelectedComment(comment.id);
        if (isEditFormVisible) {
            setEditFormVisible(false);
        } else {
            setEditFormVisible(true);
        }
    };

    const handleSubmit = (event, commentId) => {
        event.preventDefault();
        dispatch(
            updateComment({
                name: name,
                email: email,
                body: body,
                id: commentId,
                postId: id,
            })
        );
    };

    useEffect(() => {
        dispatch(getListComments(id));
    }, [dispatch]);

    useEffect(() => {
        if (deleteCommentResult) {
            dispatch(getListComments(id));
        }
    }, [deleteCommentResult, dispatch]);

    useEffect(() => {
        if (updateCommentResult) {
            dispatch(getListComments(id));
        }
    }, [updateCommentResult, dispatch]);

    return (
        <PageContainer>
            <div className="row mx-0">
                <Title title={'Comments: '} />
                <CommentForm />
                <div className="row mx-0 mt-3">
                    {getListCommentsResult ? (
                        getListCommentsResult.map((comments) => {
                            return (
                                <div
                                    className="border border-dark mb-3 p-3 w-100"
                                    key={comments.id}
                                >
                                    <div className="h6">{comments.name}</div>
                                    <div className="h6">{comments.email}</div>
                                    <div className="small font-italic">
                                        {comments.body}
                                    </div>
                                    <Button
                                        variant="mt-2 btn-dark btn-outline-secondary m-2"
                                        onClick={() => handleShow(comments)}
                                        style={{
                                            marginLeft: '5px',
                                            color: 'white',
                                        }}
                                    >
                                        Edit Comment
                                    </Button>
                                    {isEditFormVisible &&
                                        comments.id === selectedComment && (
                                            <div>
                                                <Form
                                                    className="border border-dark p-3 h-100"
                                                    onSubmit={(event) =>
                                                        handleSubmit(
                                                            event,
                                                            comments.id
                                                        )
                                                    }
                                                >
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>
                                                            Name:
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter title"
                                                            onChange={(event) =>
                                                                setName(
                                                                    event.target
                                                                        .value
                                                                )
                                                            }
                                                            defaultValue={
                                                                comments.name
                                                            }
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>
                                                            Email:
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter title"
                                                            onChange={(event) =>
                                                                setEmail(
                                                                    event.target
                                                                        .value
                                                                )
                                                            }
                                                            defaultValue={
                                                                comments.email
                                                            }
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>
                                                            Body:{' '}
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter body"
                                                            onChange={(event) =>
                                                                setBody(
                                                                    event.target
                                                                        .value
                                                                )
                                                            }
                                                            defaultValue={
                                                                comments.body
                                                            }
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Button
                                                        variant="mt-2 btn-dark btn-outline-secondary m-2"
                                                        type="submit"
                                                        style={{
                                                            color: 'white',
                                                        }}
                                                    >
                                                        Submit
                                                    </Button>
                                                </Form>
                                            </div>
                                        )}
                                    <Button
                                        variant="mt-2 btn-dark btn-outline-danger m-2"
                                        onClick={() =>
                                            dispatch(deleteComment(comments.id))
                                        }
                                        style={{
                                            marginLeft: '5px',
                                            color: 'white',
                                        }}
                                    >
                                        Delete Comment
                                    </Button>
                                </div>
                            );
                        })
                    ) : getListCommentsLoading ? (
                        <p>Loading... </p>
                    ) : (
                        <p>
                            {getListCommentsError
                                ? getListCommentsError
                                : 'Data Kosong'}
                        </p>
                    )}
                </div>
            </div>
        </PageContainer>
    );
}

export default Comments;
