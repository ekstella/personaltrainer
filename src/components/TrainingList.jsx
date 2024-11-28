import DataList from "./DataList";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import AddCustomer from "./AddCustomer";

const TrainingList = () => {
  const [rowData, setRowData] = useState([]);

  const [colDefs, setColDefs] = useState([
    {
      field: "date",
      filter: true,
      valueFormatter: (date) => formatDate(date.data.date),
    }, //TODO: format date
    { field: "duration", filter: "agNumberColumnFilter" },
    { field: "activity", filter: "agSetColumnFilter" },
    {
      headerName: "Customer",
      filter: true,
      valueGetter: (row) =>
        row.data.customer.firstname + " " + row.data.customer.lastname,
    },
  ]);

  const formatDate = (dateString) => {
    console.log(dateString);
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

  return (
    <div>
      <DataList rowData={rowData} colDefs={colDefs} />
    </div>
  );
};

export default TrainingList;
