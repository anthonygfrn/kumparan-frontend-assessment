import PageContainer from '../../components/layout/Container';
import Title from '../../components/layout/Title';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getComments } from '../../services/HttpApi';
import CommentForm from '../../components/forms/CommentForm';

function Comments() {
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const [selectedComment, setSelectedComment] = useState(0);
    const [isEditFormVisible, setEditFormVisible] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const onNameInput = ({ target: { value } }) => setName(value);
    const onEmailInput = ({ target: { value } }) => setEmail(value);
    const onBodyInput = ({ target: { value } }) => setBody(value);

    const handleShow = (comments) => {
        setSelectedComment(comments.id);
        if (isEditFormVisible) {
            setName('');
            setEmail('');
            setBody('');
            setEditFormVisible(false);
        } else {
            setName(comments.name);
            setEmail(comments.email);
            setBody(comments.body);
            setEditFormVisible(true);
        }
    };

    const addComments = (event) => {
        event.preventDefault();
        const newComments = {
            postId: id,
            name: name,
            email: email,
            body: body,
        };
        axios
            .post('https://jsonplaceholder.typicode.com/comments', newComments)
            .then((response) => setComments([...comments, response.data]));
        setName('');
        setEmail('');
        setBody('');
    };

    const editComment = (event, commentId) => {
        event.preventDefault();
        const editedPost = {
            id: commentId,
            postId: id,
            name: name,
            email: email,
            body: body,
        };
        axios
            .put(
                `https://jsonplaceholder.typicode.com/comments/${commentId}`,
                editedPost
            )
            .then((response) => {
                console.log(response.data);
                let newComments = comments.slice();
                const postIndex = comments.findIndex(
                    (obj) => obj.id === commentId
                );
                newComments[postIndex].name = response.data.name;
                newComments[postIndex].email = response.data.email;
                newComments[postIndex].body = response.data.body;
                setComments(newComments);
            });
    };

    const deleteComments = (commentId) => {
        setComments(
            comments.filter(function (value) {
                return value.id !== commentId;
            })
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await getComments(id);
            setComments(res.data);
        };
        fetchData();
    }, [id]);

    return (
        <PageContainer>
            <div className="row mx-0">
                <Title title={'Comments: '} />
                <CommentForm
                    add={addComments}
                    name={onNameInput}
                    email={onEmailInput}
                    body={onBodyInput}
                    NameValue={name}
                    EmailValue={email}
                    BodyValue={body}
                />
                <div className="row mx-0 mt-3">
                    {comments.map((comments) => (
                        <div
                            className="border border-success mb-3 p-3 w-100"
                            key={comments.id}
                        >
                            <div className="h6">{comments.name}</div>
                            <div className="h6">{comments.email}</div>
                            <div className="small font-italic">
                                {comments.body}
                            </div>
                            <Button
                                variant="primary"
                                onClick={() => handleShow(comments)}
                            >
                                Edit Comment
                            </Button>
                            {isEditFormVisible &&
                                comments.id === selectedComment && (
                                    <div>
                                        <Form
                                            className="border border-primary p-3 h-100"
                                            onSubmit={(event) =>
                                                editComment(event, comments.id)
                                            }
                                        >
                                            {' '}
                                            <Form.Group className="mb-3">
                                                <Form.Label>Name: </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter title"
                                                    onChange={onNameInput}
                                                    value={name}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email: </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter title"
                                                    onChange={onEmailInput}
                                                    value={email}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Body: </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter body"
                                                    onChange={onBodyInput}
                                                    value={body}
                                                />
                                            </Form.Group>
                                            <Button
                                                variant="primary"
                                                type="submit"
                                            >
                                                Submit
                                            </Button>
                                        </Form>
                                    </div>
                                )}

                            <button
                                className="btn btn-outline-danger btn-sm m-3 p-2"
                                onClick={() => deleteComments(comments.id)}
                            >
                                <i className="fa fa-caret-left fa-fw "></i>{' '}
                                Delete Comment{' '}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </PageContainer>
    );
}

export default Comments;
