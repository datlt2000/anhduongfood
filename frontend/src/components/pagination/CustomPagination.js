import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";

export default function CustomPagination({ page, pageNumber, handleChangePage, className, size }) {
    const [pageList, setPageList] = useState([]);
    useEffect(() => {
        if (pageNumber <= 7) {
            let newPageList = Array.from({ length: pageNumber }, (value, index) => index + 1);
            setPageList(newPageList);
        } else if (pageNumber === 8) {
            let newPageList = Array.from({ length: 7 }, (value, index) => index + 1);
            newPageList[5] = false;
            newPageList[6] = 8;
            setPageList(newPageList);
        } else if (pageNumber > 8) {
            let newPageList = Array.from({ length: 7 }, (value, index) => index + 1);
            newPageList[1] = false;
            newPageList[5] = false;
            newPageList[6] = pageNumber;
            setPageList(newPageList);
        }
    }, [pageNumber])
    return (
        <Pagination className={className} size={size}>
            <Pagination.Prev disabled={page === 0} onClick={() => { handleChangePage(page - 1) }} />
            {pageList.map((item, idx) => {
                if (item) {
                    return <Pagination.Item key={idx} active={item === page + 1} onClick={(e) => handleChangePage(e, item - 1)}>{item}</Pagination.Item>
                }
                return <Pagination.Ellipsis />
            })}
            <Pagination.Next disabled={page === pageNumber} onClick={() => { handleChangePage(page + 1) }} />
        </Pagination>
    );
}