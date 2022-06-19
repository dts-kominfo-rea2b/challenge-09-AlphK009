// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import contacts from '../data/contacts.json';
import './Contact.css';
const Contact = () => {
    return (
        <>
        {contacts?.map((contact, index) => ( 
            <div className='container'>
            <div className="contact-card" key={index}>
                <img className="contact-image" src={contact.photo} alt={contact.name} key={index}/>
                <div className="contact-info">
                    <h3 className='contact-name' key={index}>{contact.name}</h3>
                    <p className='contact-number' key={index}>{contact.phone}</p>
                    <p className='contact-email' key={index}>{contact.email}</p>
                </div>
            </div>
            </div>
        ))}
        </>
    )
}

export default Contact;