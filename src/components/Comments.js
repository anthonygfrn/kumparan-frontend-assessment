import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router';

function Comments() {

    const [comments, setComments] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => {
            setComments(res.data);
      }, []);
    } )

    return (
        <div className="row mx-0">
                <div className="h2">
                    Comments :
                </div>
                <div className="mt-2">
                        <Link to="/" className="btn btn-outline-secondary"><i className="fa fa-caret-left fa-fw"></i>Home</Link>
                </div>
                { comments.map(comments =>
                    <div className="border-bottom mb-1 p-2 w-100" key={comments.id}>
                        <div className="h6">
                            {comments.email}
                        </div>
                        <div className="small font-italic">
                            "{comments.body}""
                        </div>
                    </div>
                )}
            </div>
  );
}


export default Comments;
