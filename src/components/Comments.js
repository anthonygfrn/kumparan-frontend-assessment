import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Comments() {
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const [isFormVisible, setFormVisible] = useState(false);
    const [selectedComment, setSelectedComment] = useState(0);
    const [isEditFormVisible, setEditFormVisible] = useState(false);
    const handleShow = (comments) => {
        setSelectedComment(comments.id);
        if (isEditFormVisible) {
            setName("");
            setEmail("");
            setBody("");
            setEditFormVisible(false);
        } else {
            setName(comments.name);
            setEmail(comments.email);
            setBody(comments.body);
            setEditFormVisible(true);
        }
    };

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((res) => {
                setComments(res.data);
            });
    }, [id]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");
    const onNameInput = ({ target: { value } }) => setName(value);
    const onEmailInput = ({ target: { value } }) => setEmail(value);
    const onBodyInput = ({ target: { value } }) => setBody(value);

    const handleForm = () => {
        if (isFormVisible) {
            setFormVisible(false);
        } else {
            setFormVisible(true);
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
            .post("https://jsonplaceholder.typicode.com/comments", newComments)
            .then((response) => setComments([...comments, response.data]));
        setName("");
        setEmail("");
        setBody("");
        // setCounter(counter + 1);
    };

    function editComment(event, commentId) {
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
    }

    function deleteComments(commentId) {
        console.log(commentId);
        setComments(
            comments.filter(function (value, index, posts) {
                return value.id !== commentId;
            })
        );
    }

    return (
        <div className="container">
            <div className="row mx-0">
                <div className="h3 m-2 mt-4">Comments :</div>
                <div className="mt-2">
                    <button
                        className="btn btn-outline-dark m-2"
                        onClick={handleForm}
                    >
                        <i className="fa fa-caret-left fa-fw"></i> Add new
                        comments{" "}
                    </button>
                </div>
                <div className="mt-2">
                    {isFormVisible && (
                        <div>
                            <Form
                                className="border border-primary p-3 h-100"
                                onSubmit={addComments}
                            >
                                <Form.Group className="mb-3">
                                    <Form.Label>Name: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Name"
                                        onChange={onNameInput}
                                        value={name}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter email"
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
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    )}
                    <div className="row mx-0 mt-3">
                        {comments.map((comments) => (
                            <div
                                className="border border-success mb-3 p-3 w-100"
                                key={comments.id}
                            >
                                <div className="h6">{comments.name}</div>
                                <div className="h6">{comments.email}</div>
                                <div className="small font-italic">
                                    "{comments.body}""
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
                                                    editComment(
                                                        event,
                                                        comments.id
                                                    )
                                                }
                                            >
                                                {" "}
                                                <Form.Group className="mb-3">
                                                    <Form.Label>
                                                        Name:{" "}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter title"
                                                        onChange={onNameInput}
                                                        value={name}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>
                                                        Email:{" "}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter title"
                                                        onChange={onEmailInput}
                                                        value={email}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>
                                                        Body:{" "}
                                                    </Form.Label>
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
                                    <i className="fa fa-caret-left fa-fw "></i>{" "}
                                    Delete Comment{" "}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;
