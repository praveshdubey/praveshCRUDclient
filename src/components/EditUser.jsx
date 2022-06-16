import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { editUser, getUser } from '../services/api'




const Container=styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;    
    & > div{
        margin-top: 20px;
    }
`

const defaultValue={
    name:'',
    username:'',
    email:'',
    phone:''
}

const EditUser=()=> {

    const [user,setUser] = useState(defaultValue)
    const navigate= useNavigate();
    const {id} = useParams();


    useEffect(()=>{
        loadUserDetails();
    }, [ ] )
    
    const loadUserDetails = async()=>{
        const response = await getUser(id);
        setUser(response.data);
    }
    

    const onValueChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    }

    const editUserDetails= async()=>{
        await editUser(user, id);
        navigate('/all')
    }


  return (

    <Container>
            <Typography variant='h4'>Edit user</Typography>
            <FormControl>
                <InputLabel>Name: </InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>User Name: </InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="username" value={user.username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email-Id: </InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="email" value={user.email}  />
            </FormControl>
            <FormControl>
                <InputLabel>phone: </InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="phone" value={user.phone}  />
            </FormControl>
            <FormControl>
               <Button variant='contained' onClick={()=> editUserDetails()}>Edit User</Button>
               {/* <Button variant='contained' onClick={()=> editUserDetails()}>Edit User</Button> */}
            </FormControl>
        </Container>
  )
}

export default EditUser; 