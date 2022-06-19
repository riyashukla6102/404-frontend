import React,{ useState } from 'react'
import styles from './SignUp.module.css'
import { Paper,makeStyles,InputBase,Button,FormControlLabel,Checkbox,InputAdornment,IconButton} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const InputStyles = makeStyles({
    root: {
        paddingRight: 10,
        paddingLeft: 10,
        background: "#fff",
        border:'1px solid #0263a1',
        borderRadius: "5px",
        height: 40,
        boxShadow: "2px 3px 5px -1px rgba(0,0,0,0.2)",
        width:'100%'
      },
  });

  const PaperStyles = makeStyles({
    root: {
      backgroundColor:'rgba(52, 52, 52, 0.7)'
      
    
},
label:{
    fontWeight: 600
}
});

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select className={styles.dropdown} value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};


const SignUp=()=>{
    const[showPassword,setShowPassword]=useState(false);
    const[fname,setFname]=useState('');
    const[lname,setLname]=useState('');
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const InputClasses=InputStyles();
    const PaperClasses=PaperStyles();
    const [role, setrole] = React.useState('fruit');
  

  const handleroleChange = (event) => {
    setrole(event.target.value);
  };

  


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return(
        <div className={styles.container}>
        <Paper className={styles.SignUpPaper} classes={PaperClasses} elevation={5}>
            <div>
                {/* <img src='/netra-logo.png' width={60} height={60}/> */}
                <div className={styles.netra}>DC</div>
            </div>
            <div style={{textAlign:'center'}}>
                <h4 style={{margin:0, color:'white'}}>Create Your Account</h4>
            </div>
            <form id={styles.signUpForm}>
            <div className={styles.flex}>
                <InputBase classes={InputClasses} name='firstname' value={fname} onChange={(e)=>{setFname(e.target.value)}} id='firstname' placeholder='First Name' required/>
                <InputBase classes={InputClasses} name='lastname' value={lname} onChange={(e)=>{setLname(e.target.value)}} id='lastname' placeholder='Last Name' required/>
            </div>
            <div className={styles.flex}>
                <InputBase 
                classes={InputClasses} 
                name='username' 
                id='username' 
                value={username} 
                onChange={(e)=>{setUsername(e.target.value)}}
                placeholder='Username' 
                endAdornment={
                    <InputAdornment position="end">
                      @dc.com
                    </InputAdornment>
                  }
                required/>
            </div>
            <div className={styles.flex} style={{marginLeft:'2%'}}>
            You can use letters,numbers,periods.
            </div>
            <div className={styles.flex}>
                <InputBase 
                classes={InputClasses} 
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                id='password' 
                placeholder='Password' 
                endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                required/>
                <InputBase 
                classes={InputClasses} 
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                id='confirm-password' 
                placeholder='Confirm Password' 
                endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                required/>
            </div>
            <div className={styles.flex} style={{marginLeft:'2%'}}>
            Use 8 or more characters with a mix of letters,numbers & symbols
            </div>
            <Dropdown
        
          options={[
            { label: 'Manager', value: 'manager' },
            { label: 'Engineer', value: 'engineer' },
            // { label: 'Admin', value: 'admin' },
            { label: 'Product Owner', value: 'productowner' },
          ]}
          
          value={role}
          onChange={handleroleChange}
      />
      <div className={styles.roleassign}>Assigned Role</div>

      
            </form>
            <Button 
            variant='contained' 
            style={{backgroundColor:'#1c4199',color:'white'}}
            onClick={()=>{console.log(fname,lname,username,password,confirmPassword)}}
            >Create Account</Button>
        </Paper>
    </div>
    )
}

export default SignUp;