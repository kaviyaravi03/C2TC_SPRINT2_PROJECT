import React from "react";

const AdminList = ({ admins, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Admin List</h2>
      {admins.length === 0 ? (
        <p>No admins found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.adminId}>
                <td>{admin.adminId}</td>
                <td>{admin.adminName}</td>
                <td>{admin.adminEmail}</td>
                <td>{admin.adminRole}</td>
                <td>
                  <button
                    onClick={() => onEdit(admin)}
                    style={{ ...styles.button, backgroundColor: "#2196F3" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(admin.adminId)}
                    style={{ ...styles.button, backgroundColor: "#f44336" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  button: {
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    margin: "0 5px",
    cursor: "pointer",
  },
};

export default AdminList;
