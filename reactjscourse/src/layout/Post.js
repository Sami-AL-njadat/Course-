export default function Post() {
  const styles = {
    margin: "20px 0 0 100px",
    color: "black",
    background: "#ffffffff",
    textAlign: "center",
    height: "150px",
    width: "80%",
    padding: "40px",
    border: "5px solid #13c7a3ff",
  };

  const stylesh2 = {
    borderBottom: "1px solid #000000",
  };
 
  return (
    <>
      <div style={styles}>
        <h2 style={stylesh2}>Bode Component</h2>
        <p>this is a  just  test</p>
      </div>

 
    </>
  );
}
