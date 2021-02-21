import React, { useState } from 'react';

/* Styles */
import './Pagination.scss';

export const Pagination = (props) => {
    const [page, setPage] = useState('');

    const handlePageChange = (newPage) => {
        const isPageValid = validatePage(newPage)
        if (newPage === '' || isPageValid) {
            setPage(newPage);
            if (isPageValid) {
                props.handlePageChange(Number(newPage));
            }
        }
    };

    const handlePrevNext = (newPage) => {
        if (validatePage(newPage)) {
            props.handlePageChange(Number(newPage));
        }
    };

    const handleBlur = () => {
        const isPageValid = validatePage(page);
        props.handlePageChange(isPageValid ? Number(page) : props.value);
        setPage('');
    };

    const validatePage = (page) => {
        if (!(/^[0-9]+$/.test(page))) return false;
        else return 1 <= page && props.totalPages >= page;
    };

    return (
        <div className="pagination" style={props.style}>
            <div className="pagination-index">
                {props.currentPage} - {props.totalPages}
            </div>
            <div className="pagination-button-group">
                <div className="btn-prev unselectable"
                    onClick={() => handlePrevNext(props.value - 1)}
                    title="Anterior">
                    <img className="btn-icon" src="/assets/caret-left.svg" />
                </div>
                <input className="pagination-input"
                    onChange={({ target }) => handlePageChange(target.value)}
                    onBlur={handleBlur}
                    type="text"
                    placeholder={props.value}
                    value={page} />
                <div className="btn-next unselectable"
                    onClick={() => handlePrevNext(props.value + 1)}
                    title="Siguiente">
                    <img className="btn-icon" src="/assets/caret-right.svg" />
                </div>
            </div>
        </div>
    );
};
