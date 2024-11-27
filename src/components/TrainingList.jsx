import DataList from "./DataList";
import { useEffect, useState } from "react";

const TrainingList = () => {
  const [rowData, setRowData] = useState([]);

  const [colDefs, setColDefs] = useState([
    { field: "date" }, //TODO: format date
    { field: "duration" },
    { field: "activity" },
    {
      headerName: "Customer",
      valueGetter: (row) =>
        row.data.customer.firstname + " " + row.data.customer.lastname,
    },
  ]);

  const getData = () => {
    fetch(
      "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/gettrainings"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data);
      });
  };

  useEffect(getData, []);

  return <DataList rowData={rowData} colDefs={colDefs} />;
};

export default TrainingList;
