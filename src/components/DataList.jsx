import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from "react";

const DataList = () => {
  const [rowData, setRowData] = useState([
    {
      firstname: "John",
      lastname: "Johnson",
      streetaddress: "5th Street",
      postcode: "23110",
      city: "Flintsone",
      email: "john@mail.com",
      phone: "232-2345540",
      _links: {
        self: {
          href: "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers/3135",
        },
        customer: {
          href: "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers/3135",
        },
        trainings: {
          href: "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers/3135/trainings",
        },
      },
    },
    {
      firstname: "Mary",
      lastname: "Philips",
      streetaddress: "Hill Street 3",
      postcode: "23322",
      city: "Flintsone",
      email: "m.philips@mail.com",
      phone: "232-310122",
      _links: {
        self: {
          href: "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers/3136",
        },
        customer: {
          href: "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers/3136",
        },
        trainings: {
          href: "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers/3136/trainings",
        },
      },
    },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "firstname" },
    { field: "lastname" },
    { field: "streetaddress" },
    { field: "postcode" },
    { field: "city" },
    { field: "email" },
    { field: "phone" },
  ]);

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
