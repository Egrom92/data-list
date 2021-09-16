import React from 'react'
import './Pagination.css'

const Pagination = (props) => {
    const {page, pages, onSelect, onUpdateList} = props;

    const selectHandler = (e, page) => {
        e.preventDefault()
        onSelect(page)
        onUpdateList({activeTr: null})
    }

    return (
        <>
            <nav className='pagination'>
                <a onClick={(e)=>selectHandler(e, page - 1)} className={`pagination__direction pagination__direction_prev ${page === 1 && 'disabled'}`} href="/">
                    <i className="fas fa-chevron-left"></i>
                </a>

                {[...Array(pages)].map((x, i) =>
                    <a onClick={(e)=>selectHandler(e, i+1)} key={i} href="/" className={`pagination__page ${page - 1 === i && 'active'}`}>{i+1}</a>
                )}
                <a onClick={(e)=>selectHandler(e, page + 1)} className={`pagination__direction pagination__direction_next ${page === pages && 'disabled'}`} href="/">
                    <i className="fas fa-chevron-right"></i>
                </a>
            </nav>
        </>
    )
}

export default Pagination