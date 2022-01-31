import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Header } from "./components/Header";
import { ShowingByComponent } from "./components/ShowingByComponent";
import { Table } from "./components/Table";

import { tableActions } from "./store/table-slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())
      .then((data) => dispatch(tableActions.addCountriesToState(data)))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header />
      <ShowingByComponent />
      <Table />
    </>
  );
}

export default App;
