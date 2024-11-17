import axios from "axios"; 

const baseurl = 'http://localhost:4000'
const headers = (token)=> {
  return {authorization:`bearer ${token}`}
}

const register = async (userData)=>{
  const res = await axios.post(baseurl+'/auth/register/',userData)
  return res.data

}
const login = async (credentials)=>{
  const res = await axios.post(baseurl+'/auth/login/',credentials)
  localStorage.setItem('expenseTrackerToken',res.data.token)
  return res.data
}
const fetchUser = async (token) =>{
  const res = await axios.get(baseurl+'/user',{headers:headers(token)})
  return res;
}

export default {register,login,fetchUser}