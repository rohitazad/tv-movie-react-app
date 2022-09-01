import React from "react"
import './Pagination.style.scss';
import ReactPaginate from "react-paginate";

const PaginationComponent = (props)=>{
    const {maxnum, activenum, handleClick} = props
    const forcePageActive = parseInt(activenum) - 1;
    const handlePageClick = (e)=>{
        console.log('hello', e.selected)
        let pageNo = parseInt(e.selected) + 1
        handleClick(pageNo);
        window.scrollTo(0, 0)
    }
      
    
    return(
        <>
            <div className="paginationWap">
                {/* <Pagination>{items}</Pagination> */}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={maxnum}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                    renderOnZeroPageCount={null}
                    forcePage={forcePageActive}
                />
            </div>
        </>
    )
}

export  default PaginationComponent;