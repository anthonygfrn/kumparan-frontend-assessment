import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router';


function Posts() {


    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res => {
            setPosts(res.data);
      }, []);
    } )

    function addPost(e) {
        e.preventDefault();
        console.log('oi');
    };

    return (
        <div className="container">
        <div className="row mx-0 flex-column mt-4">
            <div className="h2">List of posts</div>
            <div className="mt-2">
                <Link to="/" className="btn btn-outline-secondary"><i className="fa fa-caret-left fa-fw"></i> Back</Link>
            </div>
            <div className="mt-2">
                <button className="btn btn-outline-secondary" onClick={addPost}><i className="fa fa-caret-left fa-fw"></i> Add Post </button>
            </div>
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
                      
                </div>
            )}
        </div>
    </div>
);
}   


export default Posts;
