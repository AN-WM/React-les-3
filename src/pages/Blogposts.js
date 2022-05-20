import React from "react";
import '../App.css'
import posts from '../data/posts.json';
import {Link} from "react-router-dom";

function Blogposts() {

    return (
        <>
            <h1>Blogposts</h1>
            <h3>Aantal blogposts: {posts.length}</h3>
            <ul>
                {posts.map((post) => {
                        return <li
                            key={post.id}
                        >
                            <Link to={`/blogposts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    }
                )}
            </ul>
        </>
    )
}

export default Blogposts;