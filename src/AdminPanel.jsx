import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState(""); // state for date filter

  // Fetch all appointments
  const fetchAppointments = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/appointments");
      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      console.error("❌ Error fetching appointments:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
    const interval = setInterval(fetchAppointments, 10000); // auto-refresh
    return () => clearInterval(interval);
  }, []);

  // Delete appointment
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;
    try {
      await fetch(`http://localhost:5000/api/appointments/${id}`, { method: "DELETE" });
      setAppointments((prev) => prev.filter((appt) => appt._id !== id));
    } catch (err) {
      console.error("❌ Error deleting appointment:", err);
    }
  };

  // Helper: format date string to YYYY-MM-DD
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Filter appointments by date
  const filteredAppointments = filterDate
    ? appointments.filter((appt) => formatDate(appt.date) === filterDate)
    : appointments;

  return (
    <div className="admin-panel">
      <h2>📅 All Appointments</h2>

      {/* Date Filter Input */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="dateFilter"><strong>Filter by Date: </strong></label>
        <input
          type="date"
          id="dateFilter"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        {filterDate && (
          <button
            onClick={() => setFilterDate("")}
            style={{
              marginLeft: "10px",
              padding: "5px 10px",
              backgroundColor: "#1890ff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        )}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : filteredAppointments.length === 0 ? (
        <p>No appointments found for this date.</p>
      ) : (
        <div
          className="appointments-grid"
          style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
        >
          {filteredAppointments.map((appt) => (
            <div
              key={appt._id}
              className="appointment-card"
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                width: "500px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <p><strong>Name:</strong> {appt.name}</p>
              
              <p><strong>Service:</strong> {appt.service}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
