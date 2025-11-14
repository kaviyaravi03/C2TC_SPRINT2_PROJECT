import React, { useState, useEffect } from "react";

const AdminForm = ({ onSave, selectedAdmin }) => {
  const [admin, setAdmin] = useState({
    adminId: "",
    adminName: "",
    adminEmail: "",
    adminPassword: "",
    adminRole: "",
  });

  useEffect(() => {
    if (selectedAdmin) {
      setAdmin(selectedAdmin);
    } else {
      setAdmin({
        adminId: "",
        adminName: "",
        adminEmail: "",
        adminPassword: "",
        adminRole: "",
      });
    }
  }, [selectedAdmin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  onSave(admin);
  setAdmin({
    adminId: "",
    adminName: "",
    adminEmail: "",
    adminPassword: "",
    adminRole: "",
  }); // reset form after submit
};

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>{admin.adminId ? "Update Admin" : "Add New Admin"}</h2>
      <input
        type="number"
        name="adminId"
        placeholder="Admin ID"
        value={admin.adminId}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="adminName"
        placeholder="Admin Name"
        value={admin.adminName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="adminEmail"
        placeholder="Admin Email"
        value={admin.adminEmail}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="adminPassword"
        placeholder="Admin Password"
        value={admin.adminPassword}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="adminRole"
        placeholder="Admin Role"
        value={admin.adminRole}
        onChange={handleChange}
        required
      />
      <button type="submit" style={styles.button}>
        {admin.adminId ? "Add Admin" : "Add Admin"}
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AdminForm;
