import React, { useEffect } from 'react'
import '../../styles/Dashboards/Applications.css'
import axios from 'axios'


export default function Applications() {

    const fetchApplicant = async () =>{
        const token = localStorage.getItem('token')
       try{
         const res =  await axios.get('http://localhost:9000/api/admin/apply/workforce/getdetails', { headers: { Authorization: `Bearer ${token}` } })

        console.log(res.data)
        // alert('sucess')
       }catch(err){
        console.log(err)
       }
    }

    useEffect(()=>{
        fetchApplicant();
    }, [])

    return (
        <div className='application-page'>
            <div className="application-container">
                <div className="application-header">
                    <h2>Applications</h2>
                </div>

                <div className='application-content'>
                    <div className="application-card">
                        <div className='application-avatar-cont'>
                            <img src="" alt="" className='application-avatar' />
                        </div>

                        <div className='application-card-body'>
                            <div className="application-body-group">
                                <span>Full Name</span>
                                <label>
                                    <h3>Name</h3>
                                </label>
                            </div>

                            <div className="application-body-group">
                                <span>Gender</span>
                                <label>
                                    <h3>First Name</h3>
                                </label>
                            </div>

                            <div className="application-body-group">
                                <span>Date of Birth</span>
                                <label>
                                    <h3>First Name</h3>
                                </label>
                            </div>

                            <div className="application-body-group">
                                <span>Program & Level</span>
                                <label>
                                    <h3>First Name</h3>
                                    <h3>First Name</h3>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="application-modal-cont">
                    
                </div>
            </div>
        </div>
    )
}
