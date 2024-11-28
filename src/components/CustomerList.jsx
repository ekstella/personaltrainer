import AddCustomer from "./AddCustomer";
import DataList from "./DataList";
import { useEffect, useState } from "react";
import EditCustomer from "./EditCustomer";

/*
  Component that displays customers, fetches data from the API, 
  renders a table of the data
*/
const CustomerList = () => {
  const [rowData, setRowData] = useState([]);

  // define columns for table, explicitly add filters to all columns
  const [colDefs, setColDefs] = useState([
    { field: "firstname", filter: true },
    { field: "lastname", filter: true },
    { field: "streetaddress", filter: true },
    { field: "postcode", filter: true },
    { field: "city", filter: true },
    { field: "email", filter: true },
    { field: "phone", filter: true },
    {
      // render an edit button to allow updating data
      field: "edit",
      cellRenderer: (props) => (
        <EditCustomer data={props.data} updateCustomer={updateCustomer} />
      ),
    },
  ]);
  // fetches data from the API
  const getData = () => {
    fetch(
      "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data._embedded.customers);
      });
  };

  const saveCustomer = (customer) => {
    fetch(
      "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      }
    )
      .then((res) => getData())
      .catch((err) => console.error(err));
  };

  const updateCustomer = (customer, link) => {
    fetch(link, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
      .then((res) => getData())
      .catch((err) => console.error(err));
  };

  // fetches data upon page load
  useEffect(getData, []);

  return (
    <div>
      <AddCustomer saveCustomer={saveCustomer} />
      <DataList rowData={rowData} colDefs={colDefs} />
    </div>
  );
};

export default CustomerList;
