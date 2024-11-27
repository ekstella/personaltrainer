import { useState } from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";

function App() {
  const [count, setCount] = useState(0);

  return <CustomerList />;
}

export default App;
