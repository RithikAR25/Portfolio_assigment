/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../Components/Section_contact/Section_Contact.module.css'
import ContactForm from '../Components/Section_contact/ContactForm'

const Section_Contact = () => {
  return (
    <div id='contact' className={styles.Section_Contact}>   
       <h1>Contact</h1>
       <ContactForm/>
    </div>
  )
}

export default Section_Contact