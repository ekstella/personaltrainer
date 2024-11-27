import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid


const DataList = ({rowData, colDefs}) => {
  

  return (
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 500 , width: "90vw"}} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default DataList;
