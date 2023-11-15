import React, { useState } from "react";

const TodoCard = ({ todo, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [editedStatus, setEditedStatus] = useState(
    todo.status || "not completed"
  );

  const [backgroundColor, setBackgroundColor] = useState("lightblue");

  const handleColorChange = (status) => {
    const newColor = status === "completed" ? "lightgreen" : "lightcoral";
    setBackgroundColor(newColor);
    setEditedStatus(status);
  };

  const handleSaveEdit = () => {
    onEdit(todo, {
      name: editedName,
      description: editedDescription,
      status: editedStatus,
    });
    setEditMode(false);
  };

  return (
    <div
      style={{
        color: "black",
        backgroundColor: " #99ccff",
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {!editMode ? (
        <>
          <div style={{ marginBottom: "10px", marginLeft: "0px" }}>
            Name:{todo.name}
          </div>
          <div style={{ marginBottom: "10px" }}>
            Description:{todo.description}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <label for="statusFilter">Filter:</label>
            </div>
            <div>
              <select
                id="statusFilter"
                style={{ color: "white", backgroundColor: backgroundColor }}
                onChange={(e) => handleColorChange(e.target.value)}
                value={editedStatus}
              >
                <option value="completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
              </select>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button onClick={() => onDelete(todo)}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <div
            style={{ position: "relative", marginTop: "10px", width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div style={{ flex: "1", marginRight: "10px" }}>
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: "10px",
                    }}
                  >
                    Status:
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ marginRight: "5px" }}>{editedStatus}</div>
                      <div
                        style={{
                          borderTop: "5px solid transparent",
                          borderBottom: "5px solid transparent",
                          borderLeft: "5px solid black",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        width: "100%",
                        background: "#fff",
                        border: "1px solid #ddd",
                        zIndex: "1",
                      }}
                    >
                      <div
                        style={{ padding: "5px", cursor: "pointer" }}
                        onClick={() => setEditedStatus("completed")}
                      >
                        Completed
                      </div>
                      <div
                        style={{ padding: "5px", cursor: "pointer" }}
                        onClick={() => setEditedStatus("not completed")}
                      >
                        Not Completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoCard;
