import React, {useEffect} from 'react'
import './Article.css'
import {useDispatch, useSelector} from 'react-redux';
import {load} from '../../store/post';
import {createMarkup, getImage} from '../../helpers';

const Article = (props) => {

    const dispatch = useDispatch();
    const post = useSelector((state) => state.post.post);

    useEffect(() => {
        dispatch(load());
    }, [dispatch]);


    let tags = [];

    if (post.tags) {
        tags = post.tags
    }


    return (
        <article>
            <div className="description" dangerouslySetInnerHTML={createMarkup(post.intro)}/>
            {getImage(post.images)}
            <div className="text" dangerouslySetInnerHTML={createMarkup(post.body)}/>

            <ul className="tags">
                {tags.map((el, i) => {
                    return <li key={i} className="tag"> {el} </li>
                })}
            </ul>
        </article>
    )
}

export default Article