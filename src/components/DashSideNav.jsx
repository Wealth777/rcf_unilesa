import React from 'react';
import { FiHome, FiUsers, FiSettings, FiGrid, FiClipboard, FiInbox, FiUploadCloud, FiFileText, FiUser, } from 'react-icons/fi';
import '../styles/componentsStyle/DashSideNav.css';
import { Link } from 'react-router-dom';

export default function DashSideNav({ isExpanded, setIsExpanded, mobileOpen, setMobileOpen }) {

    const isMobile = window.innerWidth <= 1024;

    const rootClass = `
    dash-sidenav 
    ${isExpanded ? '' : 'collapsed'} 
    ${mobileOpen ? 'mobile-open' : ''} 
    ${!mobileOpen && isMobile ? 'mobile-hidden' : ''}
  `;

    function toggleExpand() {
        if (isMobile) setMobileOpen(!mobileOpen);
        else setIsExpanded(prev => !prev);
    }

    function closeMobile() {
        if (isMobile) setMobileOpen(false);
    }

    return (
        <div className={rootClass}>
            <div className="menu">
                <h3 className="menu-title">Menu</h3>

                <ul>
                    <Link className='side-links' to={'/admin/dashboard'}>
                        <li onClick={closeMobile}>
                            <FiHome className="icon" />
                            {isExpanded && <span>Dashboard</span>}
                        </li>
                    </Link>
                    
                    <Link to={'/admin/upload/news'} className='side-links'>
                        <li onClick={closeMobile}>
                            <FiFileText className="icon" />
                            {isExpanded && <span>News Upload</span>}
                        </li>
                    </Link>

                    <Link to={'/admin/upload/program'} className='side-links'>
                        <li onClick={closeMobile}>
                            <FiUploadCloud className="icon" />
                            {isExpanded && <span>Program Upload</span>}
                        </li>
                    </Link>

                    <Link to={'/admin/applications'} className='side-links'>
                        <li onClick={closeMobile}>
                            <FiInbox className="icon" />
                            {isExpanded && <span>Applications</span>}
                        </li>
                    </Link>

                    <Link className='side-links' to={'/admin/profile'}>
                        <li onClick={closeMobile}>
                            <FiUser className="icon" />
                            {isExpanded && <span>Profile</span>}
                        </li>
                    </Link>
                </ul>
            </div>

            {/* <div className="logout" onClick={closeMobile}>
        <FiLogOut className="icon" />
        {isExpanded && <span>Logout</span>}
      </div> */}
        </div>
    );
}
