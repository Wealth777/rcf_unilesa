import React, { useState } from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import '../../styles/Auth/Auth.css'
import logo from '../../assets/20251028_154814-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaLock, FaEnvelope } from 'react-icons/fa';
import * as yup from 'yup'
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function AdminSignin() {

    const [showPassword, setShowConfirmPassword] = useState(false)

    React.useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                const res = await axios.post('http://localhost:9000/api/admin/login', values)

                // console.log(res.data.message + ' ,' + ' token: ' + res.data.token)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem("admin", JSON.stringify(res.data.admin));
                toast.success(res.data.message)
                navigate('/admin/')
            } catch (err) {
                // console.log(err)
                toast.error(`Error creating account: ${err.response?.data?.message || err.message}`)
            }
        },
        validationSchema: yup.object({
            email: yup.string().email('Invalid email format').required('Email is required'),
            password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        })
    })

    return (
        <div className="auth-page">
            <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
            <div className="auth-container" data-aos="fade-up">
                <img src={logo} alt="logo" className="auth-logo" />
                <h2 className="auth-title">Admin Signin</h2>

                <form className="auth-form" onSubmit={formik.handleSubmit}>
                    <div>
                        <div>
                            <FaEnvelope className='input-icon' />
                            <input
                                type="email"
                                name='email'
                                placeholder="Email"
                                className="auth-input"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <p className='auth-err'>{formik.touched.email && formik.errors.email ? <small>{formik.errors.email}</small> : ''} </p>
                    </div>
                    <div>
                        <div>
                            <FaLock className='input-icon' />
                            <input
                                type={showPassword ? 'text' : "password"}
                                name='password'
                                placeholder="Password"
                                className="auth-input"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <span className='input-icon' onClick={() => setShowConfirmPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <p className='auth-err'>{formik.touched.password && formik.errors.password ? <small>{formik.errors.password}</small> : ''} </p>
                    </div>

                    <p><Link className='links' to={'/admin/forget-password'}>Forget Password</Link></p>

                    <button className="auth-button" type='submit'>Login</button>

                    <p>I don't have an account <Link className='links' to={'/admin/signup'}>Register</Link></p>
                </form>
            </div>
        </div>


    );
};
