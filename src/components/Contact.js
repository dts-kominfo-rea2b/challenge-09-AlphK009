// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';
const Contact = (props) => {
    return (
        <>
            <div className='container'>
            <div className="contact-card">
                <img className="contact-image" src={props.contact.photo} alt={"name"}/>
                <div className="contact-info">
                    <h3 className='contact-name'>{props.contact.name}</h3>
                    <p className='contact-number'>{props.contact.phone}</p>
                    <p className='contact-email'>{props.contact.email}</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Contact;