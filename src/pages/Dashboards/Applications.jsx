import React, { useEffect, useState } from 'react'
import '../../styles/Dashboards/Applications.css'
import axios from 'axios'
import Button from '../../components/Button'
import toast, { Toaster } from 'react-hot-toast'

export default function Applications() {
const [formData, setFormData] = useState([])
const [selected, setSelected] = useState(null)
const [showModal, setShowModal] = useState(false)

const fetchApplicant = async () => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get('http://localhost:9000/api/admin/apply/workforce/getdetails', {
            headers: { Authorization: `Bearer ${token}` }
        })
        setFormData(res.data?.data || [])
    } catch (err) {
        // console.log(err)
        toast.error(err.response?.data?.message || err.message)
    }
}

useEffect(() => {
    fetchApplicant()
}, [])

const openModal = item => {
    setSelected(item)
    setShowModal(true)
}

return (
    <div className='application-page'>
        <Toaster position='top-center' toastOptions={{ duration: 4000 }} />
        <div className='application-container'>
            
            <div className='application-header'>
                <h2>Workforce Applications</h2>
            </div>

            <div className='application-content'>
                {formData.map((item, i) => (
                    <div key={i} className='application-card'>
                        <div className='application-avatar-cont'>
                            <img src={item.passport} className='application-avatar' alt='' />
                        </div>

                        <div className='application-card-body'>
                            <div className='application-body-group'>
                                <span>Full Name</span>
                                <h3>{item.fullName}</h3>
                            </div>

                            <div className='application-body-group'>
                                <span>Gender</span>
                                <h3>{item.gender}</h3>
                            </div>

                            <div className='application-body-group'>
                                <span>Programme</span>
                                <h3>{item.programme}</h3>
                            </div>

                            <Button text='View Full Profile' onClick={() => openModal(item)} />
                        </div>
                    </div>
                ))}
            </div>

            {showModal && selected && (
                <div className='application-modal' onClick={() => setShowModal(false)}>
                    <div className='application-modal-inner' onClick={e => e.stopPropagation()}>
                        
                        <div className='modal-header'>
                            <div className='modal-user-summary'>
                                <img src={selected.passport} className='modal-avatar' alt='' />
                                <div className='modal-title'>
                                    <h3>{selected.fullName}</h3>
                                    <p>{selected.programme}, {selected.level}</p>
                                </div>
                            </div>
                            <button className='close-modal' onClick={() => setShowModal(false)}>Close</button>
                        </div>

                        <div className='modal-grid'>
                            <div className='detail-item'>
                                <strong>Gender</strong>
                                <span>{selected.gender}</span>
                            </div>

                            <div className='detail-item'>
                                <strong>Phone</strong>
                                <span>{selected.phoneNumber}</span>
                            </div>

                            <div className='detail-item'>
                                <strong>Date of Birth</strong>
                                <span>{selected.DOB ? selected.DOB.split("T")[0] : ""}</span>
                            </div>

                            <div className='detail-item full-width'>
                                <strong>Campus Address</strong>
                                <span>{selected.capAddress}</span>
                            </div>

                            <div className='detail-item full-width'>
                                <strong>Home Address</strong>
                                <span>{selected.homeAddress}</span>
                            </div>

                            <div className='detail-item'>
                                <strong>Saved</strong>
                                <span>{selected.saved}</span>
                            </div>

                            <div className='detail-item full-width'>
                                <strong>Salvation Story</strong>
                                <span>{selected.salvationStory}</span>
                            </div>

                            <div className='detail-item'>
                                <strong>Water Baptized</strong>
                                <span>{selected.baptized}</span>
                            </div>

                            <div className='detail-item'>
                                <strong>Spirit Baptized</strong>
                                <span>{selected.holySpiritbaptized}</span>
                            </div>

                            <div className='detail-item'>
                                <strong>Preferred Unit</strong>
                                <span>{selected.unit}</span>
                            </div>

                            <div className='detail-item full-width'>
                                <strong>Reason</strong>
                                <span>{selected.reason}</span>
                            </div>

                            <div className='detail-item'>
                                <strong>Relationship</strong>
                                <span>{selected.relationship}</span>
                            </div>

                            <div className='detail-item full-width'>
                                <strong>Other Details</strong>
                                <span>{selected.details}</span>
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </div>
    </div>
)
}