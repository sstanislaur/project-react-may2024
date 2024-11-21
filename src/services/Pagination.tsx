import React from 'react';
import {Props} from "../types/pagination";

export const Pagination: React.FC<Props> = ({currentPage, totalPages, onPageChange}) => {
    const pages = Array.from({length: totalPages}, (_, i) => i + 1);

    return (
        <div className="pagination">
            {pages.map((page) => (
                <button key={page} onClick={() => onPageChange(page)} disabled={page === currentPage}>
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination
