import DataList from "./DataList";
import { useEffect, useState } from "react";

const CustomerList = () => {
  const [rowData, setRowData] = useState([]);

  const [colDefs, setColDefs] = useState([
    { field: "firstname" },
    { field: "lastname" },
    { field: "streetaddress" },
    { field: "postcode" },
    { field: "city" },
    { field: "email" },
    { field: "phone" },
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
