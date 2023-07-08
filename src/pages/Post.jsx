import "../assets/css/components/card.css"
import { search } from "../api/api"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Post = () =>{
    const [post, setPost] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        search(`/posts/${id}`, setPost).catch(() => {
            navigate("/not-found")
        })
    }, [id])
    
    return(
        <main className = "container flex flex--center">
            <article className = "card post">
                <h2 className = "post-card__title">{post.title}</h2>
                <p className = "text__card">{post.body}</p>
            </article>
        </main>
    )
}

export default Post