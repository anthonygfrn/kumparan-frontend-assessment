import PageContainer from '../../components/layout/Container';
import Title from '../../components/layout/Title';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import ReturnButton from '../../components/ui/ReturnButton';
import PostForm from '../../components/forms/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { getListPosts } from '../../actions/PostAction';

function Posts() {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    // const [selectedPost, setSelectedPost] = useState(0);
    // const [isEditFormVisible, setEditFormVisible] = useState(false);
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const onBodyInput = ({ target: { value } }) => setBody(value);
    const onTitleInput = ({ target: { value } }) => setTitle(value);
    const { getListPostsResult, getListPostsLoading, getListPostsError } =
        useSelector((state) => state.postReducer);
    const dispatch = useDispatch();

    // const handleShow = (post) => {
    //     setSelectedPost(post.id);
    //     if (isEditFormVisible) {
    //         setTitle('');
    //         setBody('');
    //         setEditFormVisible(false);
    //     } else {
    //         setTitle(post.title);
    //         setBody(post.body);
    //         setEditFormVisible(true);
    //     }
    // };

    const addPost = (event) => {
        event.preventDefault();
        const newPost = {
            userId: id,
            title: title,
            body: body,
        };
        axios
            .post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then((response) => setPosts([...posts, response.data]));
        setTitle('');
        setBody('');
    };

    // const editPost = (event, postId) => {
    //     event.preventDefault();
    //     const editedPost = {
    //         id: postId,
    //         userId: id,
    //         title: title,
    //         body: body,
    //     };
    //     axios
    //         .put(
    //             `https://jsonplaceholder.typicode.com/posts/${postId}`,
    //             editedPost
    //         )
    //         .then((response) => {
    //             console.log(response.data);
    //             let newPosts = posts.slice();
    //             const postIndex = posts.findIndex((obj) => obj.id === postId);
    //             newPosts[postIndex].title = response.data.title;
    //             newPosts[postIndex].body = response.data.body;
    //             setPosts(newPosts);
    //         });
    // };

    // const deletePost = (postId) => {
    //     setPosts(
    //         posts.filter(function (value) {
    //             return value.id !== postId;
    //         })
    //     );
    // };

    useEffect(() => {
        // const fetchData = async () => {
        //     const res = await getPosts(id);
        //     setPosts(res.data);
        // };
        // fetchData();
        dispatch(getListPosts(id));
    }, [dispatch]);

    return (
        <PageContainer>
            <ReturnButton link={'/'} />
            <PostForm
                add={addPost}
                title={onTitleInput}
                body={onBodyInput}
                TitleValue={title}
                BodyValue={body}
            />
            <Title title={'List of Posts'} />
            <div className="row mx-0 mt-3">
                {/* posts.map((post) => (
                    <div
                        className="border border-success mb-3 p-3 w-100"
                        key={post.id}
                    >
                        <div className="h4">{post.title}</div>
                        <p className="font-italic">{post.body}</p>
                        <Link
                            className="btn btn-outline-warning btn-sm m-3 p-2"
                            to={{
                                pathname: `/comments/${post.id}`,
                            }}
                        >
                            {' '}
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
                                    {' '}
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
                            Post{' '}
                        </button>
                    </div>
                )) */}
                {getListPostsResult ? (
                    getListPostsResult.map((post) => {
                        return (
                            <p key={post.id}>
                                <div
                                    className="border border-success mb-3 p-3 w-100"
                                    key={post.id}
                                >
                                    <div className="h4">{post.title}</div>
                                    <p className="font-italic">{post.body}</p>
                                    <Link
                                        className="btn btn-outline-warning btn-sm m-3 p-2"
                                        to={{
                                            pathname: `/comments/${post.id}`,
                                        }}
                                    >
                                        {' '}
                                        See Comment(s)
                                    </Link>
                                </div>
                            </p>
                        );
                    })
                ) : getListPostsLoading ? (
                    <p>Loading... </p>
                ) : (
                    <p>
                        {getListPostsError ? getListPostsError : 'Data Kosong'}
                    </p>
                )}
            </div>
        </PageContainer>
    );
}

export default Posts;
