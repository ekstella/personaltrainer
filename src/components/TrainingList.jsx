import DataList from "./DataList";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";

const TrainingList = () => {
  const [rowData, setRowData] = useState([]);

  const [colDefs, setColDefs] = useState([
    { field: "date", valueFormatter: (date) => formatDate(date.data.date) }, //TODO: format date
    { field: "duration" },
    { field: "activity" },
    {
      headerName: "Customer",
      valueGetter: (row) =>
        row.data.customer.firstname + " " + row.data.customer.lastname,
    },
  ]);

  const formatDate = (dateString) => {
    console.log(dateString)
    const date = parseISO(dateString);
    return format(date, "dd.MM.yyyy hh:mm");
  };

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
