 import { Link } from "react-router-dom";


export default function Pages() {
  // const [selectedItem, setSelectedItem] = useState(null);

  let arrays = [
    {
      id: 1,
      name: "John",
      praghraph:
        "John John John JohnJohn JohnJohn JohnJohn JohnJohn JohnJohn JohnJohn John John",
    },
    { id: 2, name: "Doe", praghraph: "Doe Doe Doe Doe Doe Doe Doe Doe Doe" },
    { id: 3, name: "Smith", praghraph: "Smith Smith Smith Smith Smith Smith Smith Smith Smith" },
    { id: 4, name: "Jane", praghraph: "Jane Jane Jane Jane Jane Jane Jane Jane Jane" },
    { id: 5, name: "Brown", praghraph: "Brown Brown Brown Brown Brown Brown Brown Brown Brown" },
  ];
 
  let postlest = arrays.map((item) => (
    <Link state={{ item }} key={item.id} to={`/details/${item.id}`}>
      <div
        key={item.id}
        style={{
          border: "1px solid black",
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          width: "200px",
          display: "inline-block",

         
  
        }}
      >
        <h3>{item.name}</h3>
        <p>{item.pragraph}</p>
      </div>
    </Link>
  )); 
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Posts Page</h1>
      <div>
        {postlest}
      </div>

    </div>
  );
}