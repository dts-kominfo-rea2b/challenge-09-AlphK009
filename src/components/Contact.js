// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import contacts from '../data/contacts.json';
import './Contact.css';
const Contact = () => {
    return (
        <>
        {contacts?.map(contact => ( 
            <div className='container'>
            <div className="contact-card">
                <img className="contact-image" src={contact.photo} alt={contact.name}/>
                <div className="contact-info">
                    <h3 className='contact-name'>{contact.name}</h3>
                    <p className='contact-number'>{contact.phone}</p>
                    <p className='contact-email'>{contact.email}</p>
                </div>
            </div>
            </div>
        ))}
        </>
    )
}

export default Contact;