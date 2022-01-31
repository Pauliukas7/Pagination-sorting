import { useSelector } from "react-redux";
import { RootState } from "../store";

export const ShowingByComponent: React.FC = () => {
  const showingByArea: boolean = useSelector(
    (state: RootState) => state.table.showingByArea
  );

  const showingByOceania: boolean = useSelector(
    (state: RootState) => state.table.showingByOceania
  );
  let component;
  if (showingByArea)
    component = (
      <h3>Showing countries that have an area size less than Lithuania</h3>
    );
  else if (showingByOceania)
    component = <h3>Showing countries from Oceania Region </h3>;
  else component = <></>;

  return component;
};
