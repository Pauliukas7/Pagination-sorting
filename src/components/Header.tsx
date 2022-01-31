import { useDispatch } from "react-redux";
import { tableActions } from "../store/table-slice";
import "./Header.css";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const filterByAreaHandler = () => {
    dispatch(tableActions.filterByArea());
  };

  const filterByOceaniaHandler = () => {
    dispatch(tableActions.filterByOceania());
  };
  const resetFilterHandler = () => {
    dispatch(tableActions.resetFilters());
  };

  return (
    <div className="main-header">
      <div className="filters-container">
        <button className="filter-button" onClick={filterByAreaHandler}>
          Countries smaller than Lithuania
        </button>
        <button className="filter-button" onClick={filterByOceaniaHandler}>
          Oceanian Countries
        </button>
      </div>
      <div className="reset-container">
        <button className="filter-button" onClick={resetFilterHandler}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};
