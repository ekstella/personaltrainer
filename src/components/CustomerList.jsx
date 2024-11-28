import DataList from "./DataList";
import { useEffect, useState } from "react";

const CustomerList = () => {
  const [rowData, setRowData] = useState([]);

  const [colDefs, setColDefs] = useState([
    { field: "firstname", filter: true },
    { field: "lastname", filter: true},
    { field: "streetaddress", filter: true },
    { field: "postcode", filter: true },
    { field: "city", filter: true },
    { field: "email", filter: true },
    { field: "phone", filter: true },
  ]);
  const getData = () => {
    fetch(
      "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data._embedded.customers);
      });
  };

  useEffect(getData, []);

  return <DataList rowData={rowData} colDefs={colDefs} />;
};

export default CustomerList;
