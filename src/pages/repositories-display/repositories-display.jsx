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

  const onSelectionChanged = useCallback((event) => {
    const selectedRows = event.api.getSelectedRows();
    if (selectedRows.length > 0) {
      const selectedRow = selectedRows[0];
      refetch({ name: selectedRow.name, owner: selectedRow.owner });
    }
  }, []);

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
        onSelectionChanged={onSelectionChanged}
      ></AgGridReact>
    </div>
  );
};

export default RepositoryDisplay;
