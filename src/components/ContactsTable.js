import * as React from 'react';
import axios from "axios";
import { styled, IconButton, Typography } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

const Table = styled( "table" )`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    margin: 20px auto;
    word-break: break-all;
`;
const ContactsTable = () => {
    const [ contacts, setContacts ] = React.useState([]);

    const getContacts = async () => {
        try {
          const res = await axios.get("http://localhost:8800/api/v1/contacts");
          setContacts(res.data);
        } catch (error) {
          console.log(error)
        }
      };

      const handleDelete = async (id) => {
        await axios
          .delete("http://localhost:8800/api/v1/contacts/" + id)
          .then(({ data }) => {
            const newArray = contacts.filter((contact) => contact._id !== id);
            setContacts(newArray);
          })
          .catch((error) => console.log(error))
      };

      React.useEffect( () => {
        getContacts();
      }, [setContacts])

      
    return (
        <TableContainer>
            <Table>
                <TableBody>
                {contacts.map((contact, i) => (
                    <TableRow key={i}>
                    <TableCell width="45%">
                        <Typography variant="h6">{contact.name}</Typography>
                    </TableCell>
                    <TableCell width="50%">
                        <Typography variant="h6">{contact.phoneNumber}</Typography>
                    </TableCell>
                    <TableCell alignCenter width="5%">
                        <IconButton onClick={() => handleDelete(contact._id)} sx={{ border: "3px solid #b30000", borderRadius: "8px", backgroundColor: "#b30000", color:"#fff"}}>
                            <DeleteForeverOutlinedIcon/>
                        </IconButton>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ContactsTable;