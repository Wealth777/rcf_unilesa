import React, { useEffect, useState } from 'react';
import { FiMenu, FiBell, FiUser, FiLogOut, FiX } from 'react-icons/fi';
import '../styles/componentsStyle/DashTopNav.css';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DashTopNav({ isExpanded, setIsExpanded, mobileOpen, setMobileOpen }) {
  const [email, setEmail] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [name, setName] = useState('');
  const [passport, setPassport] = useState(null); // store passport URL

  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');

      const res = await axios.get(
        'http://localhost:9000/api/admin/profile/me',
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const user = res.data.data;
      setEmail(user.email);
      setSerialNumber(user.serialNumber);
      setName(user.firstName + ' ' + user.lastName);
      setPassport(user.passport || null); // if passport exists, set it
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || err.message);
      navigate('/admin/signin');  
    }
  };

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    navigate('/admin/signin');
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="dash-topnav">
      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
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
          {isExpanded ? <FiX className='sidebar-icon' /> : <FiMenu className="sidebar-icon" />}
        </button>

        <h2 className="title">{name}</h2>
      </div>

      <div className="right">
        <div className="profile">
          <div>
            <p>{serialNumber}</p>
            <p>{email}</p>
          </div>
          {passport ? (
            <img
              src={passport}
              alt="passport"
              className="top-passport-image"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            />
          ) : (
            <FiUser className="top-icon" />
          )}
        </div>
        <FiLogOut className="top-logout-icon" onClick={logOut} />
      </div>
    </div>
  );
}
