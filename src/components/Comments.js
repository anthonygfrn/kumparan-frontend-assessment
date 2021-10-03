import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';

function Comments() {

    const [comments, setComments] = useState([]);
    const {id} = useParams();
    const [isFormVisible, setFormVisible] = useState(false);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => {
            setComments(res.data);
      });
        }, [id] )

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const onNameInput = ({target:{value}}) => setName(value);
    const onEmailInput = ({target:{value}}) => setEmail(value);
    const onBodyInput = ({target:{value}}) => setBody(value);

    const handleForm = () => {
        if (isFormVisible) {
            setFormVisible(false);
        } else {
            setFormVisible(true);
        }
    }

    const addComments = (event) => {
        event.preventDefault();
        const newComments = {
            postId: id,
            name: name,
            email: email,
            body: body}
        axios.post('https://jsonplaceholder.typicode.com/comments', newComments
        )
        .then(response => setComments([...comments, response.data]));
        setName('')
        setEmail('');
        setBody('');
        // setCounter(counter + 1);
    }

    function deleteComments(commentId) {;
        console.log(commentId);
        setComments(comments.filter(function(value, index, posts){
            return value.id !== commentId;
        }
        ))};
    

    return (
        <div className="row mx-0">
                <div className="h2">
                    Comments :
                </div>
                <div className="mt-2">
                        <Link to="/" className="btn btn-outline-secondary"><i className="fa fa-caret-left fa-fw"></i>Home</Link>
                </div>
                <div className="mt-2">
                <button className="btn btn-outline-secondary" onClick={handleForm}><i className="fa fa-caret-left fa-fw"></i> Add new comments </button>
                </div>
                {isFormVisible && <div  >
                    <Form className="border border-primary p-3 h-100" onSubmit={addComments}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={onNameInput} value={name} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="text" placeholder="Enter email" onChange={onEmailInput} value={email} />
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
                <div>
                { comments.map(comments =>
                    <div className="border-bottom mb-1 p-2 w-100" key={comments.id}>
                        <div className="h6">
                            {comments.name}
                        </div>
                        <div className="h6">
                            {comments.email}
                        </div>
                        <div className="small font-italic">
                            "{comments.body}""
                        </div>
                        <div className="mt-2">
                        <button className="btn btn-outline-danger btn-sm" onClick={() => deleteComments(comments.id)}><i className="fa fa-caret-left fa-fw"></i> Delete Comment </button>
                        </div>
                    </div>
                )}
            </div>
            </div>
  );
}


export default Comments;
