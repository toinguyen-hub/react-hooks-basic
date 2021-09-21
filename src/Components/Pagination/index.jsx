import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {

    const { pagination, onPageChange } = props;
    //pagination từ API trả về 
    const { _page, _limit, _totalRows } = pagination;

    // _limit: số item mỗi trang 
    // _totalRows: tổng số item
    const totalPages = Math.ceil(_totalRows / _limit);

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }
    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                prev
            </button>

            <button
                disabled={_page >= totalPages}
                onClick={() => handlePageChange(_page + 1)}
            >
                next
            </button>

        </div>
    );
}

export default Pagination;