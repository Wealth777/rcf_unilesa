import { useFormik } from 'formik'
import '../../styles/Dashboards/Settings.css'
import * as yup from 'yup'
import { useState } from 'react'

export default function Settings() {
    const [preview, setPreview] = useState(null)

    const formik = useFormik({
        initialValues: {
            serialNumber: '',
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            gender: '',
            phoneNumber: '',
            passport: '',
            inductionYear: '',
            position: ''
        },
        validationSchema: yup.object({
            passport: yup.string().required('Passport required'),
            serialNumber: yup.string().required('Serial number required'),
            firstName: yup.string().required('First name required'),
            middleName: yup.string().required('Middle name required'),
            lastName: yup.string().required('Last name required'),
            email: yup.string().email('Invalid email').required('Email required'),
            gender: yup.string().required('Gender required'),
            phoneNumber: yup.string().required('Phone number required'),
            inductionYear: yup.string().required('Year required'),
            position: yup.string().required('Position required')
        }),
        onSubmit: values => {
            console.log(values)
        }
    })

    const handleImage = e => {
        const file = e.target.files[0]
        if (!file) return
        const url = URL.createObjectURL(file)
        setPreview(url)
        formik.setFieldValue('passport', file)
    }

    return (
        <div className='settings-page-container'>
            <form className='settings-card-container' onSubmit={formik.handleSubmit}>
                
                <div className='settings-profile-image'>
                    <img 
                        src={preview || '/placeholder.png'} 
                        alt='' 
                        className='settings-avatar'
                    />

                    <input 
                        type='file' 
                        accept='image/*'
                        onChange={handleImage}
                    />
                </div>

                <div className='settings-profile'>
                    <div className='settings-profile-group'>
                        <input 
                            type='text' 
                            placeholder='Serial Number'
                            name='serialNumber'
                            onChange={formik.handleChange}
                            value={formik.values.serialNumber}
                            disabled
                        />
                    </div>

                    <div className='settings-profile-group'>
                        <input 
                            type='text' 
                            placeholder='First Name'
                            name='firstName'
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />

                        <input 
                            type='text' 
                            placeholder='Middle Name'
                            name='middleName'
                            onChange={formik.handleChange}
                            value={formik.values.middleName}
                        />

                        <input 
                            type='text' 
                            placeholder='Last Name'
                            name='lastName'
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                    </div>

                    <div className='settings-profile-group'>
                        <label className='radio'>
                            <input 
                                type='radio' 
                                name='gender' 
                                value='Male'
                                onChange={formik.handleChange}
                                checked={formik.values.gender === 'Male'}
                            />
                            Male
                        </label>

                        <label className='radio'>
                            <input 
                                type='radio' 
                                name='gender' 
                                value='Female'
                                onChange={formik.handleChange}
                                checked={formik.values.gender === 'Female'}
                            />
                            Female
                        </label>
                    </div>

                    <div className='settings-profile-group'>
                        <input 
                            type='email' 
                            placeholder='Email'
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            disabled
                        />

                        <input 
                            type='text' 
                            placeholder='Phone Number'
                            name='phoneNumber'
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                        />
                    </div>

                    <div className='settings-profile-group'>
                        <input 
                            type='text' 
                            placeholder='Year of induction'
                            name='inductionYear'
                            onChange={formik.handleChange}
                            value={formik.values.inductionYear}
                        />

                        <input 
                            type='text' 
                            placeholder='Position'
                            name='position'
                            onChange={formik.handleChange}
                            value={formik.values.position}
                        />
                    </div>

                    <button className='settings-submit' type='submit'>
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}
