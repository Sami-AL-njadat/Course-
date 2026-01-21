import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div>
        <nav className="">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "20px",
              padding: "10px",
              backgroundColor: "#73e254ff",
              justifyContent: "center",
              alignItems: "center",
              height: "60px",
            }}
          >
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/loan">Loan</Link>
            </li>

            <li>
              <Link to="/posts">Posts</Link>
            </li>

            <li>
              <Link to="/sasc">Materils</Link>
            </li>

             <li>
              <Link to="/new">New</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
