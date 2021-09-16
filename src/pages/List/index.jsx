import React, { useEffect } from 'react'
import { Table, Pagination } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import {load, turnPage, setState} from '../../store/list';
import './List.css'

const List = (props) => {
    const dispatch = useDispatch();

    const { pages, page, items, dir, field, tableHeaders, loading, activeTr } = useSelector(state => {
        const { pages, page, list, limit, dir, field, loading, tableHeaders, activeTr } = state.list;

        let items = []

        if (dir && field) {
            if (dir === 'asc') {
                items = list.slice().sort((a, b) => a[field] > b[field] ? 1 : -1)
            } else {
                items = list.slice().sort((a, b) => a[field] > b[field] ? -1 : 1)
            }
        } else {
            items = list.slice()
        }

        const sliceStart = (page - 1) * limit
        const sliceEnd = sliceStart + limit

        items = items.slice(sliceStart, sliceEnd)

        return { pages, page, items, dir, field, tableHeaders, loading, activeTr }
    })

    useEffect(() => {
        dispatch(load());
    }, [dispatch]);

    if (loading) {
        return <div className='info-alert'>Loding ...</div>
    }

    if (!items) {
        return <div className='info-alert'>Something went wrong! Reload the page.</div>
    }

    return (
        <div className='table-wrapper'>
            <Table
                tableHeaders={tableHeaders}
                list={items}
                orderField={field}
                orderDir={dir}
                field={field}
                activeTr={activeTr}
                onUpdateList={(params) => dispatch(setState(params))}
            />
            <Pagination
                page={page}
                pages={pages}
                onSelect={page => dispatch(turnPage(page))}
                onUpdateList={(params) => dispatch(setState(params))}
            />
        </div>
    )
}

export default List