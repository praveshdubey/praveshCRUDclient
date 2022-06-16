import { useEffect, useState } from 'react';
import React from 'react';
import {Table, TableHead, TableCell, TableRow, TableBody, styled, Button} from '@mui/material';
import { getUsers, deleteUser } from '../services/api';
import { Link } from 'react-router-dom';

const Alluser=()=> {

  const [users, setUsers] = useState([]);


  const StyledTable = styled(Table)`
    width: 90%;
    margin: 5px auto 0 auto;
    
`
const THead = styled(TableRow)`
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.911);
  & > th{
    color: #ffffff;
    font-size: 18px
  }
`
const TBody = styled(TableRow)`
  & > td{
    font-size: 16px
  }
`

  useEffect(()=>{
    getAllUsers();
  },[])

    const getAllUsers =async () =>{
     let response = await getUsers();
     setUsers(response.data)
     
    }


    const deleteUserDetails = async (id)=>{
      await deleteUser(id);
      getAllUsers();
    }
    

  return (

    <StyledTable>
      <TableHead>
      <THead>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>UserName</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Actions</TableCell>
      </THead>
      </TableHead>
      <TableBody>
          {
            users.map(user=>(
              <TBody key={user._id} >
                   <TableCell>{user._id}</TableCell>
                   <TableCell>{user.name}</TableCell>
                   <TableCell>{user.username}</TableCell>
                   <TableCell>{user.email}</TableCell>
                   <TableCell>{user.phone}</TableCell>
                   <TableCell>
                      <Button  variant='outlined' style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                      <Button variant="outlined" color='error' onClick={()=> deleteUserDetails(user._id)}>Delete</Button>
                    </TableCell>

              </TBody>
            ))
          }
      </TableBody>
   
 


    </StyledTable>
    
    )
}

export default Alluser