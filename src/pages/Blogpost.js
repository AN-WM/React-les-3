import React from "react";
import '../App.css'
import {useParams, Link} from "react-router-dom";
import posts from '../data/posts.json';

function Blogpost() {

    const {blogId} = useParams();

    const {title, date, content} = posts.find((post) => {
        return post.id === blogId;
    })

    return (
        <>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <p>{content}</p>
            <Link to="/">Keer terug naar de homepagina</Link>
        </>
    )
}

export default Blogpost;
