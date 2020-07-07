import React from 'react'

import {Pagination as PaginationAntd} from 'antd';

import './Pagination.scss';
const Pagination = (props) => {
    const{posts,location,history}=props;
    const currentPage=parseInt(posts.page);

    const onChangePage=newPage=>{
        history.push(`${location.pathname}?page=${newPage}`)        
    }

    return ( 
        <div>
            <PaginationAntd
            defaultCurrent={currentPage}
            total={posts.total}
            pageSize={posts.limit}
            onChange={newPage=>onChangePage(newPage)}
            className="pagination"
            />
            </div>
     );
}
 
export default Pagination;