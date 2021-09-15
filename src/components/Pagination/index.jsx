import React from 'react'
import './Pagination.css'

const Pagination = (props) => {
    return (
        <>
            <nav className='pagination'>
                <a className='pagination__direction pagination__direction_prev' href="/">
                    <i className="fas fa-chevron-left"></i>
                </a>
                <a href="/" className="pagination__page">1</a>
                <a href="/" className="pagination__page active">2</a>
                <a href="/" className='pagination__page'>3</a>
                <a className='pagination__direction pagination__direction_next' href="/">
                    <i className="fas fa-chevron-right"></i>
                </a>
            </nav>
        </>
    )
}

export default Pagination