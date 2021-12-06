import React from 'react';
import posts from "../data/posts.json"
import { useParams} from "react-router-dom";

function Blogpost() {

    const { blogId } = useParams()

    const currentPost = posts.find((postId) => {
        return postId.id === blogId;
    })


    return (
        <div>
            <h1>specific blogposts</h1>
            <h3>{currentPost.title}</h3>
            <h4>{currentPost.date}</h4>
            <p>{currentPost.content}</p>
        </div>
    );
};

export default Blogpost;