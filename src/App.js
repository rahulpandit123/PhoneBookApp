import "./styles.css";
import React, { useState } from "react";
import FormComp from "./FormComp";
import Info from "./Info";

export default function App() {
  const usersListObjc = [];
  const [infy, setInfy] = useState(usersListObjc);
  const addUserItem = (user) => {
    console.log("Data Length", infy.length + 1);
    setInfy([...infy, user]);
  };
  // console.log(infy);
  return (
    <div className="App">
      <FormComp data={addUserItem} />
      <Info dat={infy} />
    </div>
  );
}
