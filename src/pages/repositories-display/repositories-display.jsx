import { useQuery } from "@apollo/client";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useCallback, useState } from "react";
import { getRepositoriesData } from "../../gql/queries";

const RepositoryDisplay = ({ refetch }) => {
  const { loading, error, data } = useQuery(getRepositoriesData);
  const [colDefs, setColDefs] = useState([
    { headerName: "Owner", field: "owner", checkboxSelection: true },
    { headerName: "Name", field: "name" },
    { headerName: "Size", field: "size" },
  ]);
  console.log("render");
  const onRowSelected = useCallback(
    (event) => {
      refetch({ name: event.node.data.name, owner: event.node.data.owner });
    },
    [refetch],
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;
  console.log(data);
  return (
    <div
      className="repository-display ag-theme-quartz-dark"
      style={{ width: "45%", height: "80%" }}
    >
      <AgGridReact
        rowData={data?.repositories}
        rowSelection="single"
        columnDefs={colDefs}
        onRowSelected={onRowSelected}
      ></AgGridReact>
    </div>
  );
};

export default RepositoryDisplay;
