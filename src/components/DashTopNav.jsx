import React from 'react';
import { FiMenu, FiBell, FiUser, FiLogOut, FiX } from 'react-icons/fi';
import '../styles/componentsStyle/DashTopNav.css';

export default function DashTopNav({ isExpanded, setIsExpanded, mobileOpen, setMobileOpen }) {
  return (
    <div className="dash-topnav">
      <div className="left">
        <button
          className='sidebartoggle'
          onClick={() => {
            if (window.innerWidth <= 1024) {
              setMobileOpen(prev => !prev);
            } else {
              setIsExpanded(prev => !prev);
            }
          }}
        >
          {isExpanded ? <FiX className='sidebar-icon'/> : <FiMenu className="sidebar-icon" />}
        </button>

        <h2 className="title">Admin Dashboard</h2>
      </div>

      <div className="right">
        <FiBell className="top-icon" />
        <div className="profile">
          <FiUser className="top-icon" />
        </div>
        <FiLogOut className="top-icon" />
      </div>
    </div>
  );
}
