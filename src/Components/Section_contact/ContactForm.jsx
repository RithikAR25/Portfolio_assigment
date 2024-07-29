/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const formRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      from_name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      from_name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .matches(/^[A-Za-z]+$/, 'Must contain only letters')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .matches(/^[^\d][\w-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email address')
        .required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm('service_4j13xbs', 'template_yliq0eq', formRef.current, 'qX9EealRbBN_hm_1s')
        .then(
          () => {
            toast.success('Email sent successfully!', {
              position: 'top-center',
            });
            resetForm();
          },
          (error) => {
            toast.error('Failed to send email: ' + error.text, {
              position: 'top-center',
            });
          }
        );
    },
  });

  return (
    <>
      <div className={styles.form_box}>
        <form ref={formRef} onSubmit={formik.handleSubmit}>
          <label>Name :</label><br />
          <input
            className={styles.input}
            type="text"
            name="from_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.from_name}
          />
          {formik.touched.from_name && formik.errors.from_name ? (
            <div className={styles.error}>{formik.errors.from_name}</div>
          ) : null}
          <br />
          <label>Email :</label><br />
          <input
            className={styles.input}
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
          <br />
          <label>Message</label>
          <textarea
            className={`${styles.inputText} ${styles.input}`}
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className={styles.error}>{formik.errors.message}</div>
          ) : null}
          <br />
          <input
            className={styles.submit_button}
            type="submit"
            value="Send"
          />
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
