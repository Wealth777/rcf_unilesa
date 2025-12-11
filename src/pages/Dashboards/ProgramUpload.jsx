import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '../../components/Button'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export default function ProgramUpload() {

    const [preview, setPreview] = React.useState(null)

    const formik = useFormik({
        initialValues: {
            title: '',
            programBody: '',
            programImage: null,
            programDate: '',
            programTime: '',
            programLocation: '',
        },

        validationSchema: yup.object({
            title: yup.string().required('Title is required'),
            programBody: yup.string().required('Program body is required'),
            programImage: yup.mixed().required('Program image is required'),
            programDate: yup.date().required('Program date is required'),
            programTime: yup.string().required('Program time is required'),
            programLocation: yup.string().required('Program location is required'),
        }),

        onSubmit: async (values) => {
            // console.log(values)
            try {
                const formData = new FormData();

                Object.keys(values).forEach(key => {
                    if (key === 'programImage') {
                        formData.append('programImage', values.programImage)
                    } else {
                        formData.append(key, values[key])
                    }
                })

                await axios.post(
                    'http://localhost:9000/api/admin/post/program',
                    formData,
                    {
                        responseType: "blob",
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                )
                toast.success('Program Published Successfully')

            } catch (err) {
                toast.error(err.response?.data?.message || err.message)
            }
        }
    })


    const handleImage = e => {
        const file = e.target.files[0]
        if (!file) return
        const url = URL.createObjectURL(file)
        setPreview(url)
        formik.setFieldValue('programImage', file)
    }

    return (
        <div className="upload-page-container">
            <Toaster position='top-center' toastOptions={{ duration: 4000 }} />
            <form className="upload-form" onSubmit={formik.handleSubmit}>

                <h2>Create New Program</h2>

                <div className="image-upload-section">
                    <label className="file-input-label">
                        <div className='image-preview-wrapper'>
                            <img
                                src={preview || '/placeholder.png'}
                                alt='Program Preview'
                                className='upload-avatar'
                            />
                        </div>
                        <span className="file-input-text">Click to upload cover image</span>
                        <input
                            type='file'
                            accept='image/*'
                            onChange={handleImage}
                            className="hidden-input"
                        />
                        <small className='err'>
                            {formik.touched.programImage && formik.errors.programImage ? formik.errors.programImage : ''}
                        </small>
                    </label>
                </div>

                <div className="form-grid">
                    <div className="input-group full-width">
                        <span>Program Title</span>
                        <input
                            type="text"
                            name="title"
                            placeholder="e.g. Annual Youth Convention"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                        <small className='err'>
                            {formik.touched.title && formik.errors.title ? formik.errors.title : ''}
                        </small>
                    </div>

                    <div className="input-group full-width">
                        <span>Description / Body</span>
                        <textarea
                            name="programBody"
                            rows="15"
                            placeholder="Write the details about the program here..."
                            value={formik.values.programBody}
                            onChange={formik.handleChange}
                        ></textarea>
                        <small className='err'>
                            {formik.touched.programBody && formik.errors.programBody ? formik.errors.programBody : ''}
                        </small>
                    </div>

                    <div className="input-group">
                        <span>Date</span>
                        <input
                            type="date"
                            name="programDate"
                            value={formik.values.programDate}
                            onChange={formik.handleChange}
                        />
                        <small className='err'>
                            {formik.touched.programDate && formik.errors.programDate ? formik.errors.programDate : ''}
                        </small>
                    </div>

                    <div className="input-group">
                        <span>Time</span>
                        <input
                            type="text"
                            name="programTime"
                            placeholder="e.g. 10:00 AM"
                            value={formik.values.programTime}
                            onChange={formik.handleChange}
                        />
                        <small className='err'>
                            {formik.touched.programTime && formik.errors.programTime ? formik.errors.programTime : ''}
                        </small>
                    </div>

                    <div className="input-group full-width">
                        <span>Location</span>
                        <input
                            type="text"
                            name="programLocation"
                            placeholder="e.g. Main Auditorium"
                            value={formik.values.programLocation}
                            onChange={formik.handleChange}
                        />
                        <small className='err'>
                            {formik.touched.programLocation && formik.errors.programLocation ? formik.errors.programLocation : ''}
                        </small>
                    </div>

                </div>

                <Button type="submit" text='Publish Program' />

            </form>
        </div>
    )
}
