import "./TableRow.css";
interface TableRowProps {
  country: string;
  region: string;
  area: number;
}

export const TableRow: React.FC<TableRowProps> = (props) => {
  return (
    <tr className="country-row">
      <td className="country-name">{props.country}</td>
      <td className="country-region">{props.region}</td>
      <td className="country-area">{props.area}</td>
    </tr>
  );
};
