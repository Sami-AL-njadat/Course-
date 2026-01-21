 import { useLocation, Navigate } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();

  if (!state?.item) {
    return <Navigate to="/error" replace />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{state.item.name}</h1>
      <p>{state.item.praghraph}</p>
    </div>
  );
}
