import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const setState = (state) => {
    setItems(state);
  };

  return (
    <main className="h-full w-full">
      <Form setState={setState} />
      <Table items={items} setState={setState} />
    </main>
  );
}

export default App;
