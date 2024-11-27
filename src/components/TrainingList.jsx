import DataList from "./DataList";
import { useEffect, useState } from "react";

const TrainingList = () => {
  const [rowData, setRowData] = useState([]);

  const [colDefs, setColDefs] = useState([
    { field: "date" }, //TODO: format date
    { field: "duration" },
    { field: "activity" }
  ]);
  const getData = () => {
    fetch(
      "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/trainings"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data._embedded.trainings);
      });
  };

  useEffect(getData, []);

  return <DataList rowData={rowData} colDefs={colDefs} />;
};

export default TrainingList;
