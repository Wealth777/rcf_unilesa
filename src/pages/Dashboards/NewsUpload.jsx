import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import '../../styles/Dashboards/Upload.modules.css'

export default function NewsUpload() {

    const [preview, setPreview] = React.useState(null)

    const formik = useFormik({
        initialValues: {
            headLine: '',
            newsBody: '',
            newsImage: '',
            newsDate: '',
            newsAuthor: '',
        },

        validationSchema: yup.object({
            headLine: yup.string().required('Headline is required'),
            newsBody: yup.string().required('News body is required'),
            newsImage: yup.string().required('News image is required'),
            newsDate: yup.date().required('Date is required'),
            newsAuthor: yup.string().required('Author is required'),
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

                <h2>Upload News</h2>

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
                    <span>Headline</span>
                    <input
                        type="text"
                        name="headLine"
                        value={formik.values.headLine}
                        onChange={formik.handleChange}
                    />
                </label>

                <label>
                    <span>News Body</span>
                    <textarea
                        name="newsBody"
                        rows="6"
                        value={formik.values.newsBody}
                        onChange={formik.handleChange}
                    ></textarea>
                </label>

                <label>
                    <span>Date</span>
                    <input
                        type="date"
                        name="newsDate"
                        value={formik.values.newsDate}
                        onChange={formik.handleChange}
                    />
                </label>

                <label>
                    <span>Author</span>
                    <input
                        type="text"
                        name="newsAuthor"
                        value={formik.values.newsAuthor}
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
