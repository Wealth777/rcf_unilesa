import React from 'react'
import '../styles/componentsStyle/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    {/* Quick Links */}
                    <div className="footer-section">
                        <p className="footer-title">Quick Links</p>
                        <div className="footer-links-grid">
                            <Link to="/" className="footer-link">Home</Link>
                            <Link to="/aboutus" className="footer-link">About</Link>
                            <Link to="/gallery" className="footer-link">Gallery</Link>
                            <Link to="/events" className="footer-link">Programs</Link>
                            {/* <Link to="/sermon" className="footer-link">Sermons</Link> */}
                            {/* <Link to="/testimonies&prayers" className="footer-link">Testimonies</Link> */}
                            <Link to="/news" className="footer-link">News</Link>
                            {/* <Link to="/joinus" className="footer-link">Join Us</Link> */}
                        </div>
                    </div>

                    {/* Address */}
                    <div className="footer-section">
                        <p className="footer-title">Fellowship Address</p>
                        <h6 className="footer-text">
                            Mico Dollar Junction, Oke-Aroni, Ilesa, Osun State, Nigeria
                        </h6>
                    </div>

                    {/* Contact */}
                    <div className="footer-section2">
                        <div>
                            <p className="footer-title">Contact Us</p>
                            <h6 className="footer-text">For more enquiries, reach us:</h6>
                            <div className="footer-icons-block">
                                <div className="icon-block">
                                    <i className="bi bi-facebook"></i>
                                    <span>RCF University of ILESA </span>
                                </div>
                                <div className="icon-block">
                                    <i className="bi bi-instagram"></i>
                                    <span>rcfunilesa</span>
                                </div>
                                <div className="icon-block">
                                    <i className="bi bi-tiktok"></i>
                                    <span>@rcfunilesa</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6 className="footer-text2">Or Call:</h6>
                            <div className="footer-icons-block">
                                <div className="icon-block">
                                    <span>+234 706 901 7453 </span>
                                </div>
                                <div className="icon-block">
                                    <span>+234 901 350 0641</span>
                                </div>
                                <div className="icon-block">
                                    <span>+234 901 784 4632</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="footer-divider" />

                <div className="footer-bottom">
                    <p>© <span id="year">2025</span> Transformation Chapel</p>
                </div>
            </div>
        </>
    )
}
