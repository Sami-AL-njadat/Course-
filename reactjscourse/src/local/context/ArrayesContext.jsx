import { createContext } from "react";

  let arrays = [
    {
      id: 1,
      name: "John",
      praghraph:
        "John John John JohnJohn JohnJohn JohnJohn JohnJohn JohnJohn JohnJohn John John",
    },
    { id: 2, name: "Doe", praghraph: "Doe Doe Doe Doe Doe Doe Doe Doe Doe" },
    {
      id: 3,
      name: "Smith",
      praghraph: "Smith Smith Smith Smith Smith Smith Smith Smith Smith",
    },
    {
      id: 4,
      name: "Jane",
      praghraph: "Jane Jane Jane Jane Jane Jane Jane Jane Jane",
    },
    {
      id: 5,
      name: "Brown",
      praghraph: "Brown Brown Brown Brown Brown Brown Brown Brown Brown",
    },
  ];
 export const posts = createContext([arrays]);

