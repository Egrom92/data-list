import React, { useEffect } from 'react'
import './Article.css'
import { useDispatch, useSelector } from 'react-redux';
import { load } from '../../store/post';
import HtmlRender from '../../components/HtmlRender'

const Article = (props) => {
    const dispatch = useDispatch();
    const { post, loading } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(load());
    }, [dispatch]);

    if (loading) {
        return <div className='info-alert'>Loding ...</div>
    }

    if (!post) {
        return <div className='info-alert'>Something went wrong! Reload the page.</div>
    }

    return (
        <article>
            <HtmlRender className="description">{post.intro}</HtmlRender>

            {post.images.map(({ large, alt, title }) => <img key={alt} src={large} alt={alt} title={title} />)}

            <div className="text" dangerouslySetInnerHTML={{ __html: post.body }} />

            <ul className="tags">
                {post.tags.map((el, i) => <li key={i} className="tag"> {el} </li>)}
            </ul>
        </article>
    )
}

export default Article