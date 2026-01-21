export default function Model({ show, onClose ,error }) {
  const stylemodel = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)", // overlay
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  };

    const modalStyle = {
      background: "white",
      color: "black",
      padding: "20px",
      borderRadius: "10px",
      minWidth: "300px",
      textAlign: "center",
      zIndex: 1000,
    };

    const h2Style = {
      marginBottom: "20px",
      color: "#13c7a3ff",
    };
console.log("ahmad");

  if (show === true) {
    return (
      <div style={stylemodel}>
        <div style={modalStyle}>
          {/* <h2>the submit successful </h2> */}
          <h2 style={{ color: error ? "red" : h2Style.color }}>
            {Array.isArray(error) && error.length > 0
              ? error.map((err, index) => <div key={index}>{err}</div>)
              : "The submit is successful"}
          </h2>

          <button
            onClick={onClose}
            style={{
              fontSize: "16px",
              cursor: "pointer",
              background: "#c71313ff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              width: "80px",
              height: "30px",
            }}
          >
            close
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
