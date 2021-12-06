import React from 'react'
import posts from '../data/posts.json'
import {Link} from 'react-router-dom'

function Overview() {
    const Blogposts = () => {
        console.log(posts)
    }

    return (
        <div>
            <h1>Welcome to the blogpost!</h1>
            <h2>Blogposts</h2>
            <h2>Aantal blogposts: {posts.length}</h2>
            <ul>
                {posts.map((overview) => {
                    return <li key={overview.id}>
                        <Link to={`/blogpost/${overview.id}`}>
                            {overview.title}
                        </Link>
                    </li>
                })};

            </ul>
        </div>
    );
};

export default Overview;