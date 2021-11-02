import PageContainer from '../../components/layout/Container';
import Title from '../../components/layout/Title';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReturnButton from '../../components/ui/ReturnButton';
import PostForm from '../../components/forms/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { getListPosts, deletePost, updatePost } from '../../actions/PostAction';

function Posts() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [selectedPost, setSelectedPost] = useState(0);
    const [isEditFormVisible, setEditFormVisible] = useState(false);

    const {
        getListPostsResult,
        getListPostsLoading,
        getListPostsError,
        deletePostResult,
        updatePostResult,
    } = useSelector((state) => state.postReducer);
    const dispatch = useDispatch();

    const handleShow = (post) => {
        setSelectedPost(post.id);
        if (isEditFormVisible) {
            setEditFormVisible(false);
        } else {
            setEditFormVisible(true);
        }
    };

    const handleSubmit = (event, postId) => {
        event.preventDefault();
        dispatch(
            updatePost({ title: title, body: body, id: postId, userId: id })
        );
    };

    useEffect(() => {
        dispatch(getListPosts(id));
    }, [dispatch]);

    useEffect(() => {
        if (deletePostResult) {
            dispatch(getListPosts(id));
        }
    }, [deletePostResult, dispatch]);

    useEffect(() => {
        if (updatePostResult) {
            dispatch(getListPosts(id));
        }
    }, [updatePostResult, dispatch]);

    return (
        <PageContainer>
            <ReturnButton link={'/'} />
            <PostForm />
            <Title title={'List of Posts'} />
            <div className="row mx-0 mt-3">
                {getListPostsResult ? (
                    getListPostsResult.map((post) => {
                        return (
                            <div key={post.id}>
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
                                    {isEditFormVisible &&
                                        post.id === selectedPost && (
                                            <div>
                                                <Form
                                                    className="border border-primary p-3 h-100"
                                                    onSubmit={(event) =>
                                                        handleSubmit(
                                                            event,
                                                            post.id
                                                        )
                                                    }
                                                >
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>
                                                            Title:
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter title"
                                                            onChange={(event) =>
                                                                setTitle(
                                                                    event.target
                                                                        .value
                                                                )
                                                            }
                                                            defaultValue={
                                                                post.title
                                                            }
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>
                                                            Body:
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
                                                                post.body
                                                            }
                                                            required
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
                                        onClick={() =>
                                            dispatch(deletePost(post.id))
                                        }
                                    >
                                        <i className="fa fa-caret-left fa-fw"></i>{' '}
                                        Delete Post{' '}
                                    </button>
                                </div>
                            </div>
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
