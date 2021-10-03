import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';


function Posts() {


    const [posts, setPosts] = useState([]);
    const {id} = useParams();
    const [isFormVisible, setFormVisible] = useState(false);
    //const [counter, setCounter] = useState(101);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res => {
            setPosts(res.data);
        });
        }, [id] )

    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const onBodyInput = ({target:{value}}) => setBody(value);
    const onTitleInput = ({target:{value}}) => setTitle(value);
    const handleForm = () => {
        if (isFormVisible) {
            setFormVisible(false);
        } else {
            setFormVisible(true);
        }
    }

    const addPost = (event) => {
        event.preventDefault();
        const newPost = {
            userId: id,
            title: title,
            body: body}
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost
        )
        .then(response => setPosts([...posts, response.data]));
        setTitle('');
        setBody('');
        // setCounter(counter + 1);
    }
    

    function deletePost(postId) {;
        console.log(postId);
            setPosts(posts.filter(function(value, index, posts){
                return value.id !== postId;
            }
        ))};


    return (
        <div className="container">
        <div className="row mx-0 flex-column mt-4">
            <div className="h2">List of posts</div>
            <div className="mt-2">
                <Link to="/" className="btn btn-outline-secondary"><i className="fa fa-caret-left fa-fw"></i> Back</Link>
            </div>
            <div className="mt-2">
                <button className="btn btn-outline-secondary" onClick={handleForm}><i className="fa fa-caret-left fa-fw"></i> Add Post </button>
            </div>
            {isFormVisible && <div >
            <Form className="border border-primary p-3 h-100" onSubmit={addPost}>
            <Form.Group className="mb-3">
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text" placeholder="Enter title" onChange={onTitleInput} value={title} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Body: </Form.Label>
                <Form.Control type="text" placeholder="Enter body" onChange={onBodyInput} value={body} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
            }
        </div> 
        <div className="row mx-0 mt-3">
            { posts.map(post =>
                <div className="border border-success mb-3 p-3 w-100" key={post.id}>
                    <div className="h4">
                        {post.title}
                    </div>
                    <p className="font-italic">
                        "{post.body}"
                    </p>
                    <Link className="btn btn-outline-primary btn-sm" to={{
                            pathname: `/comments/${post.id}`,
                        }}> See Comment(s)
                    </Link>   
                    <div className="mt-2">
                        <button className="btn btn-outline-danger btn-sm" onClick={() => deletePost(post.id)}><i className="fa fa-caret-left fa-fw"></i> Delete Post </button>
                    </div>
                      
                </div>
            )}
        </div>
    </div>
);
}   


export default Posts;
