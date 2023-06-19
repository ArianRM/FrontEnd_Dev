import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, Name, Casado, ObjectGreet, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard /> 

    <Button text="PAY" />
    <Button text="EXIT" />
    <Button />
    <UserCard
      name="Arian"
      age={20}
      married={true}
      address={{ city: "SMP", house: "mzC Lt5" }}
    />
    <Greeting name="Arian" />
    <Greeting name="Roxi" />
    <Greeting name="Nico" />
    <Name />
    <Casado />
    <ObjectGreet />
    <Product />
    <Navbar />
  </>
);
