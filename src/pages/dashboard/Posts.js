import PageContainer from '../../components/layout/Container';
import Title from '../../components/ui/Title';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from '../../components/ui/Button';
import Container from '../../components/layout/Container';
import ReturnButton from '../../components/ui/ReturnButton';
import PostForm from '../../components/forms/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { getListPosts, deletePost, updatePost } from '../../actions/PostAction';
import Column from '../../components/layout/Column';
import Text from '../../components/ui/Text';

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
            <ReturnButton link={'/users'} text={'Return'} />
            <PostForm />
            <Title title={'List of Posts'} variant="h2" />
            <Container variant="row mx-0 mt-3 ">
                {getListPostsResult ? (
                    getListPostsResult.map((post) => {
                        return (
                            <Column key={post.id}>
                                <div
                                    className="border border-dark mb-3 p-3 w-100"
                                    key={post.id}
                                >
                                    <Text variant="h4">{post.title}</Text>
                                    <p className="font-italic">{post.body}</p>
                                    <Button variant="mt-2 btn-dark btn-outline-secondary m-2">
                                        <Link
                                            to={{
                                                pathname: `/comments/${post.id}`,
                                            }}
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            See Comment(s)
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="mt-2 btn-dark btn-outline-secondary m-2"
                                        onClick={() => handleShow(post)}
                                        style={{
                                            marginLeft: '5px',
                                            color: 'white',
                                        }}
                                    >
                                        Edit Post
                                    </Button>
                                    {isEditFormVisible &&
                                        post.id === selectedPost && (
                                            <div>
                                                <Form
                                                    className="border border-dark p-3 h-100"
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
                                            dispatch(deletePost(post.id))
                                        }
                                        style={{
                                            marginLeft: '5px',
                                            color: 'white',
                                        }}
                                    >
                                        Delete Post{' '}
                                    </Button>
                                </div>
                            </Column>
                        );
                    })
                ) : getListPostsLoading ? (
                    <p>Loading... </p>
                ) : (
                    <p>
                        {getListPostsError ? getListPostsError : 'Data Kosong'}
                    </p>
                )}
            </Container>
        </PageContainer>
    );
}

export default Posts;
