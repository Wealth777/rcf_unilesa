import React from 'react'
import '../../styles/Dashboards/Dashboard.css'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  if(!token){
    toast.error('No user signed in yet')
    navigate('/admin/signin')
  }

  return (
    <div className="dashboard-page">

    <Toaster position="top-center" toastOptions={{duration: 4000}}/>
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="upload-btn">Upload Media</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Files</h3>
          <p></p>
        </div>

        <div className="stat-card">
          <h3>Images</h3>
          <p></p>
        </div>

        <div className="stat-card">
          <h3>Videos</h3>
          <p></p>
        </div>

        <div className="stat-card">
          <h3>Storage Used</h3>
          <p></p>
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Recent Uploads</h3>
        <div className="recent-grid">
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Activity</h3>
        <div className="activity-box">
        </div>
      </div>

    </div>
  )
}
