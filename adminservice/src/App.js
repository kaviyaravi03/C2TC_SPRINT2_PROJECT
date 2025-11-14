import React, { useState, useEffect } from "react";
import AdminForm from "./components/AdminForm";
import AdminList from "./components/AdminList";

const App = () => {
  const [admins, setAdmins] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const BASE_URL = "http://localhost:8081/admin";

  const fetchAdmins = async () => {
    try {
      const response = await fetch(`${BASE_URL}/getAll`);
      if (!response.ok) throw new Error("Failed to fetch admins");
      const data = await response.json();
      setAdmins(data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleSave = async (admin) => {
    try {
      const method = admin.adminId ? "PUT" : "POST";
      const endpoint = admin.adminId ? "/update" : "/add";
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(admin),
      });

      if (!response.ok) throw new Error("Failed to save admin");
      await fetchAdmins();
      setSelectedAdmin(null);
    } catch (error) {
      console.error("Error saving admin:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${BASE_URL}/delete/${id}`, { method: "DELETE" });
      fetchAdmins();
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  const handleEdit = (admin) => {
    setSelectedAdmin(admin);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Management System</h1>
      <AdminForm onSave={handleSave} selectedAdmin={selectedAdmin} />
      <AdminList admins={admins} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    border: "2px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
};

export default App;
