import "../../assets/css/components/card.css"
import { useState, useEffect } from "react"
import { search } from "../../api/api";
import { Link } from "react-router-dom";


const ListPost = ({url}) => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        search(url, setPost)
    }, [url])
    return(
        <section className="post container">
            {post.map((post) => {
                const {id, categoria, metadescription, title} = post
                return <Link to={`/posts/${id}`} className={`card post__card post-card--${categoria}`} key={id}>
                    <article>
                        <h3 className="post-card__title">
                            {title}
                        </h3>
                        <p className="post-card__meta">{metadescription}</p>
                    </article>
                </Link>
            })}
            
        </section>
    )
}

export default ListPost