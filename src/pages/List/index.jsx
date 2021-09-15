import React, {useEffect} from 'react'
import {Table, Pagination} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {load} from '../../store/list';
import './List.css'

const List = (props) => {

    const dispatch = useDispatch();
    const {list, numberOfPages, limit, pageNumber} = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(load());
    }, [dispatch]);

    let posts = []

    if (list.list) {
        posts = list.list.slice(0, numberOfPages)
    }

    return (
        <div className='table-wrapper'>
            <Table list={posts}/>
            <Pagination/>
        </div>
    )
}

export default List