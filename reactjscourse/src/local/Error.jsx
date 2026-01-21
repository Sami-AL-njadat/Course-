import { Link } from "react-router-dom";
export default function Error() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        <h1>Error 404: Page Not Found</h1>
        <Link to="/home"
        style={{
            display: "inline-block",    
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#73e254ff",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
        }}    
        >
          Go Back Home  
        </Link>
      </div>
    </>
  );
}

