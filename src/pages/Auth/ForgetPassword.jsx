import React from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import logo from '../../assets/20251028_154814-removebg-preview.png'
import { FaEnvelope } from 'react-icons/fa';

export default function ForgetPassword() {
    React.useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="auth-page">
            <div className="auth-container" data-aos="fade-up">
                <img src={logo} alt="logo" className="auth-logo" />
                <h2 className="auth-title">Reset Password</h2>

                <form className="auth-form">
                    <div>
                        <FaEnvelope className='input-icon' />
                        <input type="email" placeholder="Email" className="auth-input" />
                    </div>
                    <button className="auth-button">Send Reset Link</button>
                </form>
            </div>
        </div>
    );
};