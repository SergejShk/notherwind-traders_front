import { useState } from "react";
import ReactPaginate from "react-paginate";
import { PageDescr, WrapperPaginate } from "./Pagination.style";

interface IProps {
  setPage(page: number): void;
  countData: number;
}

const Pagination: React.FC<IProps> = ({ countData, setPage }) => {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 20;

  const pageCount = Math.ceil(countData / itemsPerPage);

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    setActivePage(selectedPage);
    setPage(selectedPage);
  };

  return (
    <WrapperPaginate>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={7}
        previousLabel=""
        nextLabel=""
        containerClassName="containerPaginate"
        pageClassName="pageItem"
        pageLinkClassName="link"
        activeClassName="activePage"
      />

      <PageDescr>
        Page {activePage} of {pageCount}
      </PageDescr>
    </WrapperPaginate>
  );
};

export default Pagination;
