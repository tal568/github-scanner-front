import {  useQuery } from "@apollo/client";
import { getRepositoriesData } from "../../main";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import { useState } from "react";


const RepositoryDisplay = ({refetch}) => {
   const {loading, error, data} = useQuery(getRepositoriesData);
   const [colDefs, setColDefs] = useState([
    { headerName: 'Owner', field: 'owner' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Size', field: 'size' }
   

   ]);
   const onRowSelected = event => {
    if (event.node.selected) {
        const selectedRow = event.node.data;
        refetch({ name: selectedRow.name ,owner:selectedRow.owner })
    }
};


   if (loading) return <p>Loading...</p>
  
   if (error) return <p>Error</p>
    console.log(data)
    return (<div className="repository-display ag-theme-quartz" style={{width:"45%",height:"80%"}}> 
    <AgGridReact rowData={data?.repositories} rowSelection="single" columnDefs={colDefs} onRowSelected={onRowSelected}></AgGridReact>
    </div> );
    
}
 
export default RepositoryDisplay;