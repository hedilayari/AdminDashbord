import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useState } from "react";
import axios from "axios"
import swal from 'sweetalert';
import { useNavigate } from "react-router";
import { useEffect } from "react";
const grid = {

}
const avatar={
backgroundColor:'#32dba0'
}
const paperStyle={
    margin:"50px auto auto",
    padding:"50px",
    height:"70vh",
    width:'300px'
}
const btn={
    backgroundColor:"#32dba0",
    fontSize:"14px",
    margin: "8px 0"
}

const Login =()=>{
    const [values, setValues] = useState({
        email:"",
        password: "",
    })
    const navigate = useNavigate();
    useEffect(() => {
      const token=localStorage.getItem('token')
      axios
        .get("http://localhost:5000/pro",{headers:{
           Authorization:token,

        }})
        .then(res => {console.log(res)
                      navigate('/')
       })
        .catch(err => {console.log(err)
         navigate('/login')});
        
     }, [])



    //console.log(values);
    const handleonSubmit=(e)=>{
    e.preventDefault();
    axios
      .post("http://localhost:5000/user/login",{
        email:values.email,
        password:values.password
      })
      .then(function(res){
        if (res.data.success===false) {
          swal("Error", res.data.message , 'error');
         
          
        }
        else{
          swal("Success", res.data.message, 'success');
                 navigate('/')
        }
        console.log(res);
        localStorage.setItem('token',res.data.token)
      }
      )
      .catch(err => console.log(err));
    }
    return(
<Grid style={grid} >
<Paper elevation={3} style={paperStyle}>
    <Grid align='center'>
<Avatar style={avatar}>
<LockIcon/>
</Avatar>
<h2>Sign In</h2>
</Grid>
<form onSubmit={handleonSubmit} >
<TextField required id="standard-required" label="Email" placeholder="Enter your email" fullWidth
onChange={(e)=>setValues({...values,email:e.target.value})} />
<TextField required id="standard-required" label="Password" placeholder="Enter your password" fullWidth type='password'
onChange={(e)=>setValues({...values,password:e.target.value})} />
<FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Button variant="contained" style={btn} fullWidth  type="submit">
  Sign In
</Button>
</form>
<Typography >
<Link href="#"  fullWidth>
        Forget your password ?
      </Link>
     
</Typography>
<Typography><Link onClick={() => navigate("/register")} >
      Do you have an account ?
      </Link></Typography>
</Paper>
</Grid>
    )
}
export default Login