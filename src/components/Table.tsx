import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import "./Table.css";
import { TableRow } from "./TableRow";
import logo from "./sort.png";
import { Country, tableActions } from "../store/table-slice";
import { Pagination } from "./Pagination";

export const Table: React.FC = () => {
  const dispatch = useDispatch();
  const recordsPerPage = useSelector(
    (state: RootState) => state.table.recordsPerPage
  );
  const currentPage = useSelector(
    (state: RootState) => state.table.currentPage
  );

  const indexOfLastRecord: number = currentPage * recordsPerPage;
  const indexOfFirstRecord: number = indexOfLastRecord - recordsPerPage;

  const tableData: Country[] = useSelector((state: RootState) =>
    state.table.currentPageCountries.slice(
      indexOfFirstRecord,
      indexOfLastRecord
    )
  );

  const sortByNameHandler = () => {
    dispatch(tableActions.sortByName());
  };

  const sortByRegionHandler = () => {
    dispatch(tableActions.sortByRegion());
  };

  const sortByAreaSizeHandler = () => {
    dispatch(tableActions.sortByAreaSize());
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>
              Country name{"         "}
              <span>
                <img src={logo} onClick={sortByNameHandler} alt="sort" />
              </span>
            </th>
            <th>
              Region{" "}
              <span>
                <img src={logo} onClick={sortByRegionHandler} alt="sort" />
              </span>
            </th>
            <th>
              Area Size{" "}
              <span>
                <img src={logo} onClick={sortByAreaSizeHandler} alt="sort" />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, i) => (
            <TableRow
              key={i}
              country={data.name}
              region={data.region}
              area={data.area}
            />
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
