import PageContainer from "../../components/layout/Container";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ReturnButton from "../../components/ui/ReturnButton";

function Posts() {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    const [isFormVisible, setFormVisible] = useState(false);
    //const [counter, setCounter] = useState(101);
    const [selectedPost, setSelectedPost] = useState(0);
    const [isEditFormVisible, setEditFormVisible] = useState(false);
    const handleShow = (post) => {
        setSelectedPost(post.id);
        if (isEditFormVisible) {
            setTitle("");
            setBody("");
            setEditFormVisible(false);
        } else {
            setTitle(post.title);
            setBody(post.body);
            setEditFormVisible(true);
        }
    };

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((res) => {
                setPosts(res.data);
            });
    }, [id]);

    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    const onBodyInput = ({ target: { value } }) => setBody(value);
    const onTitleInput = ({ target: { value } }) => setTitle(value);
    const handleForm = () => {
        if (isFormVisible) {
            setFormVisible(false);
        } else {
            setFormVisible(true);
        }
    };

    const addPost = (event) => {
        event.preventDefault();
        const newPost = {
            userId: id,
            title: title,
            body: body,
        };
        axios
            .post("https://jsonplaceholder.typicode.com/posts", newPost)
            .then((response) => setPosts([...posts, response.data]));
        setTitle("");
        setBody("");
        // setCounter(counter + 1);
    };

    const editPost = (event, postId) => {
        event.preventDefault();
        const editedPost = {
            id: postId,
            userId: id,
            title: title,
            body: body,
        };
        axios
            .put(
                `https://jsonplaceholder.typicode.com/posts/${postId}`,
                editedPost
            )
            .then((response) => {
                console.log(response.data);
                let newPosts = posts.slice();
                const postIndex = posts.findIndex((obj) => obj.id === postId);
                newPosts[postIndex].title = response.data.title;
                newPosts[postIndex].body = response.data.body;
                setPosts(newPosts);
            });
    }

    const deletePost = (postId) => {
        console.log(postId);
        setPosts(
            posts.filter(function (value, index, posts) {
                return value.id !== postId;
            })
        );
    }

    return (
        <PageContainer>
                <ReturnButton />
                <div className="h2">List of posts</div>
                <div className="mt-2">
                    <button
                        className="btn btn-outline-dark"
                        onClick={handleForm}
                    >
                        <i className="fa fa-caret-left fa-fw"></i> Add Post{" "}
                    </button>
                </div>
                <div className="mt-2">
                {isFormVisible && (
                    <div>
                        <Form
                            className="border border-dark p-3 h-100"
                            onSubmit={addPost}
                        >
                            <Form.Group className="mb-3">
                                <Form.Label>Title: </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter title"
                                    onChange={onTitleInput}
                                    value={title}
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
            </div>
            <div className="row mx-0 mt-3">
                {posts.map((post) => (
                    <div
                        className="border border-success mb-3 p-3 w-100"
                        key={post.id}
                    >
                        <div className="h4">{post.title}</div>
                        <p className="font-italic">"{post.body}"</p>
                        <Link
                            className="btn btn-outline-warning btn-sm m-3 p-2"
                            to={{
                                pathname: `/comments/${post.id}`,
                            }}
                        >
                            {" "}
                            See Comment(s)
                        </Link>

                        <Button
                            variant="primary"
                            onClick={() => handleShow(post)}
                        >
                            Edit Post
                        </Button>
                        {isEditFormVisible && post.id === selectedPost && (
                            <div>
                                <Form
                                    className="border border-primary p-3 h-100"
                                    onSubmit={(event) =>
                                        editPost(event, post.id)
                                    }
                                >
                                    {" "}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Title: </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter title"
                                            onChange={onTitleInput}
                                            value={title}
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
                        <button
                            className="btn btn-outline-danger btn-sm m-3 p-2"
                            onClick={() => deletePost(post.id)}
                        >
                            <i className="fa fa-caret-left fa-fw"></i> Delete
                            Post{" "}
                        </button>
                    </div>
                ))}
            </div>
        </PageContainer>
    );
}

export default Posts;