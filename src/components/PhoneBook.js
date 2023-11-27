import React from 'react'
import { styled, Box, Icon, Typography, Button } from "@mui/material"
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ContactsTable from './ContactsTable';
import ContactForm from './ContactForm';


const Container = styled( Box )`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;


const PhoneBook = () => {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <Container>
      <Box width="50vw" display="flex" justifyContent="center" alignItems="center" >
          <Icon fontSize='large'>
            <PermContactCalendarIcon />
          </Icon>
          <Typography variant='h2' sx={{m:"2rem"}}>Phone Book App</Typography>
      </Box >
        <Box display="flex" justifyContent="space-between" width="50vw" >
          <Typography variant='h5'>Contacts</Typography>
          <Button variant="contained" onClick={() => setShowForm(true)}>+ Add Contact</Button>
        </Box>
          {showForm && <ContactForm />}
      <ContactsTable />
    </Container>
  )
}

export default PhoneBook;