import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function ProgramUpload() {

    const [preview, setPreview] = React.useState(null)

    const formik = useFormik({
        initialValues: {
            title: '',
            programBody: '',
            programImage: '',
            programDate: '',
            programTime: '',
            programLocation: '',
        },

        validationSchema: yup.object({
            title: yup.string().required('Title is required'),
            programBody: yup.string().required('Program body is required'),
            programImage: yup.string().required('Program image is required'),
            programDate: yup.date().required('Program date is required'),
            programTime: yup.date().required('Program time is required'),
            programLocation: yup.string().required('Program location is required'),
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
        <div className="upload-page-container">
            <form className="upload-form" onSubmit={formik.handleSubmit}>

                <h2>Upload Program</h2>

                <div className='div-contain'>
                    <img
                        src={preview || '/placeholder.png'}
                        alt=''
                        className='upload-avatar'
                    />
                </div>

                <label>
                    <span>News Image</span>
                    <input
                        type='file'
                        accept='image/*'
                        onChange={handleImage}
                    />
                </label>

                <label>
                    <span>Title</span>
                    <input
                        type="text"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                    />
                </label>

                <label>
                    <span>Program Body</span>
                    <textarea
                        name="programBody"
                        rows="6"
                        value={formik.values.programBody}
                        onChange={formik.handleChange}
                    ></textarea>
                </label>

                <label>
                    <span>Date</span>
                    <input
                        type="date"
                        name="programDate"
                        value={formik.values.programDate}
                        onChange={formik.handleChange}
                    />
                </label>

                <label>
                    <span>Time</span>
                    <input
                        type="text"
                        name="programTime"
                        value={formik.values.programTime}
                        onChange={formik.handleChange}
                    />
                </label>

                <label>
                    <span>Location</span>
                    <input
                        type="text"
                        name="programLocation"
                        value={formik.values.programLocation}
                        onChange={formik.handleChange}
                    />
                </label>

                <button type="submit" className="upload-submit-btn">
                    Submit News
                </button>

            </form>
        </div>
    )
}
