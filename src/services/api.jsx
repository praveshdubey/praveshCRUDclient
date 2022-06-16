import axios from 'axios';
// const URL = 'http://localhost:8000';
const URL = 'https://praveshcrudapi.herokuapp.com';

// sending the data by the post method
export const addUser = async(data) =>{
  try{
    return await axios.post(`${URL}/add`,data);
    }
    catch(error){
      console.log("Error while calling  add user APi : " ,error)
  }
}

// getting all the data by the get method
export const getUsers = async()=>{ 
  try{
    return await axios.get(`${URL}/all`);
  }
  catch(error){
   console.log("Error while calling  add user APi : " ,error)
  }
}

// getting the single data by the get method and passed Id in the URL
export const getUser = async(id)=>{ 
  try{
    return await axios.get(`${URL}/${id}`);
  }
  catch(error){
    console.log("Error while calling  getUser  APi : " ,error)
  }
}

//  editing the single data by the put method and passed Id in the URL
export const editUser = async(user,id) =>{
  try{
    return await axios.put(`${URL}/${id}`,user);
  }
  catch(error){
    console.log("Error while calling  edit user APi : " ,error)
  }
}
//  deleting the single data by the delete method and passed Id in the URL
export const deleteUser = async (id)=>{
  try{
     return await axios.delete(`${URL}/${id}`)
  }catch(error)
  {
    console.log("Error while calling delete request.",error)
  }
}