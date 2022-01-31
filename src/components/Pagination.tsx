import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { tableActions } from "../store/table-slice";
import "./Pagination.css";

export const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const totalRecords: number = useSelector(
    (state: RootState) => state.table.currentPageCountries.length
  );

  const recordsPerPage: number = useSelector(
    (state: RootState) => state.table.recordsPerPage
  );
  const currentPage: number = useSelector(
    (state: RootState) => state.table.currentPage
  );

  const setCurrentPageHandler = (pageNumber: number) => {
    dispatch(tableActions.setCurrentPage(pageNumber));
  };

  const prevPageHandler = () => {
    dispatch(tableActions.setCurrentPage(currentPage - 1));
  };
  const nextPageHandler = () => {
    dispatch(tableActions.setCurrentPage(currentPage + 1));
  };

  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "page-number active" : "page-number"
            }
            onClick={() => setCurrentPageHandler(number)}
          >
            {number}
          </li>
        ))}
      </ul>
      <div className="previous-next">
        {currentPage > 1 && (
          <h2 className="prev" onClick={prevPageHandler}>
            Previous Page
          </h2>
        )}
        {currentPage < Math.ceil(totalRecords / 20) && (
          <h2 className="next" onClick={nextPageHandler}>
            Next Page
          </h2>
        )}
      </div>
    </div>
  );
};
