import React, { useState } from 'react'
import "aos/dist/aos.css";
import AOS from 'aos';
import '../../styles/Auth/Auth.css'
import logo from '../../assets/20251028_154814-removebg-preview.png'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function AdminSignup() {

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    React.useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: () =>{},
        validationSchema: yup.object({
            firstName: yup.string().required('First Name is required'),
            middleName: yup.string().required('Middle Name is required'),
            lastName: yup.string().required('Last Name is required'),
            email: yup.string().email('Invalid email format').required('Email is required'),
            password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password'), null], 'Passwords must match')
        })
    })

    return (
        <div className="auth-page">
            <div className="auth-container" data-aos="fade-down">
                <img src={logo} alt="logo" className="auth-logo" />
                <h2 className="auth-title">Admin Signup</h2>

                <form className="auth-form">
                    <div>
                        <FaUser className='input-icon' />
                        <input type="text"
                             name='firstName' 
                             placeholder="First Name" 
                             className="auth-input" 
                             onBlur={formik.handleBlur} 
                             onChange={formik.handleChange} 
                        />
                        <p>{formik.touched.firstName && formik.errors.firstName ? <small>{formik.errors.firstName}</small> : ''} </p>
                    </div>
                    <div>
                        <FaUser className='input-icon' />
                        <input 
                            type="text" 
                            name='middleName' 
                            placeholder="Middle Name" 
                            className="auth-input" 
                            onBlur={formik.handleBlur} 
                            onChange={formik.handleChange} 
                        />
                        <p>{formik.touched.middleName && formik.errors.middleName ? <small>{formik.errors.middleName}</small> : ''} </p>
                    </div>
                    <div>
                        <FaUser className='input-icon' />
                        <input 
                            type="text" 
                            name='lastName' 
                            placeholder="Last Name" 
                            className="auth-input" 
                            onBlur={formik.handleBlur} 
                            onChange={formik.handleChange} 
                        />
                        <p>{formik.touched.lastName && formik.errors.lastName ? <small>{formik.errors.lastName}</small> : ''} </p>
                    </div>
                    <div>
                        <FaEnvelope className='input-icon' />
                        <input 
                            type="email"  
                            name='email'
                            placeholder="Email" 
                            className="auth-input" 
                            onBlur={formik.handleBlur} 
                            onChange={formik.handleChange} 
                        />
                        <p>{formik.touched.email && formik.errors.email ? <small>{formik.errors.email}</small> : ''} </p>
                    </div>
                    <div>
                        <FaLock className='input-icon' />
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            name='password'
                            placeholder="Password" 
                            className="auth-input" 
                            onBlur={formik.handleBlur} 
                            onChange={formik.handleChange} 
                        />
                        <span className='input-icon' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash/> : <FaEye/>}
                        </span>
                        <p>{formik.touched.password && formik.errors.password ? <small>{formik.errors.password}</small> : ''} </p>
                    </div>
                    <div>
                        <FaLock className='input-icon' />
                        <input 
                            type={showConfirmPassword ? 'text' : "password"} 
                            name='confirmPassword'
                            placeholder="Confirm Password" 
                            className="auth-input" 
                            onBlur={formik.handleBlur} 
                            onChange={formik.handleChange} 
                        />
                        <span className='input-icon' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <FaEyeSlash/> : <FaEye/>}
                        </span>
                        <p>{formik.touched.confirmPassword && formik.errors.confirmPassword ? <small>{formik.errors.confirmPassword}</small> : ''} </p>
                    </div>

                    <button className="auth-button" type='button' onClick={formik.handleSubmit}>Create Account</button>

                    <p>Already has an account? <Link to={'/admin/signin'}>Login</Link></p>
                </form>
            </div>
        </div>
    );
};