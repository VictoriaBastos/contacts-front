import React from 'react'
import { Button } from '@mui/material';
import axios from "axios";

const ContactForm = ({showForm, setShowForm}) => {

    const [contact, setContact ] = React.useState({name:"", phoneNumber:""});

    const handleAddContact = async (e) => {
        e.preventDefault();
        if ( !contact.name.value || !contact.phoneNumber.value) return;
        await axios.post("http://localhost:8800/api/v1/contacts/", {
          nome: contact.name.value ,
          phoneNumber: contact.phoneNumber.value,
        })
    };

  return (
    <form className="form" onSubmit={handleAddContact}>
        <div className="form-row">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                className="form-input" 
                value={contact.name}
                onChange= {(e) => setContact(e.target.value)}
            />
        </div>

        <div className="form-row">
            <label htmlFor="phoneNumber" className="form-label">Email</label>
            <input 
                type="text" 
                name="phoneNumber" 
                id="phoneNumber" 
                className="form-input" 
                value={contact.phoneNumber}
                onChange= {(e) => setContact(e.target.value)}
            />
        </div>

        <Button variant="contained" className="btn btn-block">Send Contact</Button>

    </form>
  )
}

export default ContactForm;