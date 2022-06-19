import React,{ useEffect, useState } from 'react'
import styles from './SignIn.module.css'
import { Paper,makeStyles,InputBase,Button,FormControlLabel,Checkbox } from '@material-ui/core'
import { Link } from 'react-router-dom';


const InputStyles = makeStyles({
    root: {
        margin:'15px 0px 5px 0px',
        paddingRight: 10,
        paddingLeft: 10,
        background: "#ebebeb",
        borderRadius: "5px",
        height: 40,
        width: '70%',
        boxShadow: "2px 3px 5px -1px rgba(0,0,0,0.2)",
        "& .MuiPaper-root": {
          backgroundColor:'#010606'
        }
    },
    label:{
        fontWeight: 600
    }
  });

  const PaperStyles = makeStyles({
    root: {
          backgroundColor:'#010606'
        
    },
    label:{
        fontWeight: 600
    }
  });

const SignIn=(props)=>{

    // useEffect(()=>{
    //   if(props.loggedIn){
    //       props.history.push('/')
    //     }
    // })

    const[keepLogin,setKeepLogin]=useState(false);
    const InputClasses=InputStyles();
    const PaperClasses=PaperStyles();

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    
    
    

    // const Login=()=>{
    //     if(userName=='admin'&&password=='admin'){
    //         props.setLoggedIn(true)
    //         props.history.push('/')
    //     }
        
    // }
    return(
        <div className={styles.container}>
        <Paper className={styles.SignInPaper} classes={PaperClasses} elevation={5}>
            <div>
            {/* <img src='/netra-logo.png' width={60} height={60}/> */}
            <div className={styles.netra}>DC</div>
            </div>
            <div style={{textAlign:'center'}}>
            <h5 style={{margin:0, color:'green'}}>Welcome</h5>
            <h6 style={{margin:0,color:'green'}}>Sign in to your account</h6>
            </div>
            <InputBase classes={InputClasses} name='username' value={userName} onChange={(e)=>setUserName(e.target.value)} id='username' placeholder='User Name' required/>
            <InputBase classes={InputClasses} name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type='password' required/>
            <Button variant='contained' style={{backgroundColor:'green',color:'white'}} >Sign In</Button>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'80%'}}>
            <FormControlLabel
                classes={{
                    label: InputClasses.label
                  }}
                style={{color:'green'}}
                control={<Checkbox style={{color:'green'}} checked={keepLogin} onChange={()=>{setKeepLogin(!keepLogin)}} name="checkedA" />}
                label="Keep me logged in"
            />
            {/* <Link className={styles.links} to="/edit_profile">
                Forgot Password?
            </Link> */}
            </div>
            <Link className={styles.links} to="/register">
                Create an Account? Sign Up
            </Link>
        </Paper>
        {/* {SnackBarMessage.showSnackBar && (
        <CustomizedSnackbars
          message={SnackBarMessage}
          onHandleClose={onHandleSnackClose}
        />
      )} */}
    </div>
    )
}

export default SignIn;