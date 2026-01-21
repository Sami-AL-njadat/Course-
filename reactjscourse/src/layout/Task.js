import { useState } from "react";

export default function Task() {
  const [inputValue, setInputValue] = useState("");
  const [devices, setDevices] = useState(["samsung", "iphone", "nokia", "htc"]);
  const [editingIndex, setEditingIndex] = useState(null);

  const styles = {
    color: "white",
    background: "#135274ff",
    textAlign: "center",
    height: "auto",
    fontSize: "30px",
    width: "70%",
    margin: "10px 0 15px 15%",
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setInputValue(devices[index]);
  };

  const handleUpdate = () => {
    if (editingIndex !== null) {
      const newDevices = [...devices];
      newDevices[editingIndex] = inputValue;
      setDevices(newDevices);
      setEditingIndex(null);
      setInputValue("");
    }
  };

  const handleSubmit = () => {
    if (editingIndex !== null) {
      handleUpdate();
    } else {
      setDevices([...devices, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <div style={styles}>
        <div>Task Component</div>

        <div>
          <ul     style={{listStyleType: "none", padding: 0}}>
            {devices.map((device, index) => (
              <li key={index}>
                {index + 1} - {device}{" "}
                <button
                  style={{
                    border: "2px solid #dc2626",
                    backgroundColor: "#fee2e2",
                    color: "#dc2626",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#dc2626";
                    e.target.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#fee2e2";
                    e.target.style.color = "#dc2626";
                  }}
                  onClick={() => {
                    setDevices(devices.filter((_, i) => i !== index));
                  }}
                >
                  🗑️ Delete
                </button>{" "}
                <button
                  style={{
                    border: "2px solid #f59e0b",
                    backgroundColor: "#fef3c7",
                    color: "#f59e0b",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f59e0b";
                    e.target.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#fef3c7";
                    e.target.style.color = "#f59e0b";
                  }}
                  onClick={() => handleEdit(index)}
                >
                  ✏️ Edit
                </button>
              </li>
            ))}
          </ul>
        </div>

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={
            editingIndex !== null ? "Edit device..." : "Add device..."
          }
        />

        <button
          style={{
            border: "2px solid #35f88dff",
            backgroundColor: "#13e150ff",
            color: "#e5e5e5ff",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0fb140ff")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#13e150ff")}
          onClick={handleSubmit}
        >
          {editingIndex !== null ? "Update" : "Submit"}
        </button>

        {editingIndex !== null && (
          <button
            style={{
              border: "2px solid #6b7280",
              backgroundColor: "#e5e7eb",
              color: "#374151",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              marginLeft: "10px",
            }}
            onClick={() => {
              setEditingIndex(null);
              setInputValue("");
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </>
  );
}
