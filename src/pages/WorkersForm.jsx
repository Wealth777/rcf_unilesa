import React from 'react';
import styles from '../styles/WorkersForm.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function WorkersForm() {

    const formik = useFormik({
        initialValues: {
            fullName: '',
            gender: '',
            phoneNumber: '',
            DOB: '',
            capAddress: '',
            homeAddress: '',
            programme: '',
            level: '',
            saved: '',
            salvationStory: '',
            baptized: '',
            unit: '',
            reason: '',
            relationship: '',
            details: '',
            declaration: false,
        },
        validationSchema: yup.object({
            fullName: yup.string().required('Full Name is required'),
            gender: yup.string().required('Gender is required'),
            phoneNumber: yup.string().required('Phone Number is required'),
            DOB: yup.date().required('Date of Birth is required'),
            capAddres: yup.string().required('Campus Address is required'),
            homeAddress: yup.string().required('Home Address is required'),
            programme: yup.string().required('Programme is required'),
            level: yup.string().required('Level is required'),
            saved: yup.string().required('This field is required'),
            salvationStory: yup.string().required('Salvation Story is required'),
            baptized: yup.string().required('This field is required'),
            unit: yup.string().required('Unit is required'),
            reason: yup.string().required('Reason is required'),
            relationship: yup.string().required('Relationship Status is required'),
            details: yup.string().required('Extra Details is required'),
            declaration: yup.boolean().oneOf([true], 'You must confirm the information is correct'),
        }),
        onSubmit: (values) =>{
            console.log(values);
        }
    })

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Workers Form</h2>

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        
        <div className={styles.group}>
          <label>Full Name</label>
          <input type="text" name="fullName"  onBlur={formik.handleBlur} onChange={formik.handleChange} />
          <p>{formik.touched.fullName && formik.errors.fullName ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.fullName}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Gender</label>
          <div className={styles.inline}>
            <label>
              <input type="checkbox" name="gender" value="male" checked={formik.values.gender === "male"} onChange={() => formik.setFieldValue("gender", "male")} /> Male
            </label>
            <label>
              <input type="checkbox" name="gender" value="female" checked={formik.values.gender === "female"} onChange={() => formik.setFieldValue("gender", "female")} /> Female
            </label>
          </div>
            <p>{formik.touched.gender && formik.errors.gender ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.gender}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Phone Number</label>
          <input type="text" name="phoneNumber"  onBlur={formik.handleBlur} onChange={formik.handleChange} />
          
          <p>{formik.touched.phoneNumber && formik.errors.phoneNumber ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.phoneNumber}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Date of Birth</label>
          <input type="date" name="DOB"  onBlur={formik.handleBlur} onChange={formik.handleChange} />
          <p>{formik.touched.DOB && formik.errors.DOB ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.DOB}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Campus Address</label>
          <input type="text" name="capAddress"  onBlur={formik.handleBlur} onChange={formik.handleChange} />
          <p>{formik.touched.capAddress && formik.errors.capAddress ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.capAddress}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Home Address</label>
          <input type="text" name="homeAddress"  onBlur={formik.handleBlur} onChange={formik.handleChange} />
          <p>{formik.touched.homeAddress && formik.errors.homeAddress ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.homeAddress}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Programme</label>
          <input type="text" name="programme"  onBlur={formik.handleBlur} onChange={formik.handleChange} />
          <p>{formik.touched.programme && formik.errors.programme ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.programme}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Level</label>
          <input type="text" name="level"  onBlur={formik.handleBlur} onChange={formik.handleChange} />
          <p>{formik.touched.level && formik.errors.level ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.level}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Are you saved</label>
          <input type="text" name="saved" placeholder="Yes or No"  onBlur={formik.handleBlur} onChange={formik.handleChange} />
          <p>{formik.touched.saved && formik.errors.saved ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.saved}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Your Salvation Story</label>
          <textarea name="salvationStory" onBlur={formik.handleBlur} onChange={formik.handleChange} ></textarea>        
          <p>{formik.touched.salvationStory && formik.errors.salvationStory ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.salvationStory}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Water Baptized</label>
          <input type="text" name="baptized" placeholder="Yes or No"  onBlur={formik.handleBlur} onChange={formik.handleChange} />
          <p>{formik.touched.baptized && formik.errors.baptized ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.baptized}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Unit you want to join</label>
          <input type="text" name="unit"  onBlur={formik.handleBlur} onChange={formik.handleChange} />
          <p>{formik.touched.unit && formik.errors.unit ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.unit}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Why do you want to join</label>
          <textarea name="reason" onBlur={formik.handleBlur} onChange={formik.handleChange} ></textarea>
          <p>{formik.touched.reason && formik.errors.reason ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.reason}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Relationship Status</label>
          <input type="text" name="relationship"  onBlur={formik.handleBlur} onChange={formik.handleChange} />
          <p>{formik.touched.relationship && formik.errors.relationship ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.relationship}</span> : ''}</p>
        </div>

        <div className={styles.group}>
          <label>Extra Details</label>
          <textarea name="details" onBlur={formik.handleBlur} onChange={formik.handleChange} ></textarea>
          <p>{formik.touched.details && formik.errors.details ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.details}</span> : ''}</p>
        </div>

        <div className={styles.declaration}>
          <label>
            <input type="checkbox" name="declaration"  onBlur={formik.handleBlur} onChange={formik.handleChange} />  
            <span className={styles.confirm}>I confirm the information provided is correct</span>
          </label>
          <p>{formik.touched.declaration && formik.errors.declaration ? <span style={{ color: 'red', fontFamily: '"Caveat", cursive', fontSize: '10px' }}>{formik.errors.declaration}</span> : ''}</p>
        </div>

        <button type="submit" className={styles.submit}>Submit</button>
      </form>
    </div>
  );
}
