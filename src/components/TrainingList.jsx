import DataList from "./DataList";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import DeleteTraining from "./DeleteTraining";

/*
 Component that displays trainings, fetches data from the API,
 renders a table of the data.
*/

const TrainingList = () => {
  const [rowData, setRowData] = useState([]);

  const deleteTraining = (training) => {
    if (confirm("Are you sure you want to delete this?")==true){
      fetch(training, {
        method: "DELETE",
      }).then(() => {
        getData();
      });
    }
  };

  // define columns for table, explicitly add filters to all columns
  const [colDefs, setColDefs] = useState([
    {
      field: "date",
      filter: true,
      // format date to desired format
      valueFormatter: (date) => formatDate(date.data.date),
    }, 
    { field: "duration", filter: "agNumberColumnFilter" },
    { field: "activity", filter: "agSetColumnFilter" },
    {
      headerName: "Customer",
      filter: true,
      // combine first and last name to a single column
      valueGetter: (row) =>
        row.data.customer.firstname + " " + row.data.customer.lastname,
    },
    {
      field: "delete",
      cellRenderer: DeleteTraining,
      cellRendererParams: { deleteTraining: deleteTraining },
    },
  ]);

  // parse string to a date object and then convert back to string
  const formatDate = (dateString) => {
    console.log(dateString);
    if (dateString == null) {
      return ""
    } 
    const date = parseISO(dateString);
    return format(date, "dd.MM.yyyy hh:mm");
  };

  // fetch the data from the API
  const getData = () => {
    fetch(
      "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/gettrainings"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data);
      });
  };

  // fetch data on page load
  useEffect(getData, []);

  return (
    <div>
      <DataList rowData={rowData} colDefs={colDefs} />
    </div>
  );
};

export default TrainingList;
