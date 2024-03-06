import React from 'react';
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages)
    return (
        <div className="pagination">
            {pagesArray.map((p) =>
                <span key={p}
                      className={ page === p ? 'page-active' : 'page'}
                      onClick={() => changePage(p)}
                >{p}</span>
            )}
        </div>
    );
};

export default Pagination;