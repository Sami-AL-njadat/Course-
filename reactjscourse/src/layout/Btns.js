export default function Btn(props, children) {
  const stylesbtn = {
    justifyContent: "center",
    padding: "10px 20px",
    fontSize: "16px",
    background: "#611374ff",
    color: "white",
    borderRadius: "5px",
    width: "150px",
    margin: "1px ",
  };
  console.log(props.names, props.children);

  return (
    <>
      <button style={stylesbtn}>{props.names ? props.names : "sami"}</button>
      {/* {props.children? props.children : null} */}
    </>
  );
}
