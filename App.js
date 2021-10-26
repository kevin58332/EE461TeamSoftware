import React from "react";
import Navbar from './components/Navbar';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import AddBoxIcon from '@mui/icons-material/AddBox';
import StorageIcon from '@mui/icons-material/Storage';
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';
import './App.css';
import {
  LogBtn,
  CenterForm,
} from './components/Navbar/NavbarElements';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//If signin is in the path, it will go to the sign in page
//If signup is in the path, it will go to the sign up page
//If the path is blank, it will go to the home screen
export default function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/signin"> 
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {

  const [imgNum, setVal] = useState(0); //imgNum is used to keep track of what icon is currently showing
  const timer = React.useRef(null); //timer used for carousel
  const icons = [
  <AlternateEmailIcon className = "large_icon"/>,
  <SecurityIcon className = "large_icon"/>,
  <CloudIcon className = "large_icon"/>,
  <AddBoxIcon className = "large_icon"/>,
  <StorageIcon className = "large_icon"/>
]; //list of all of the icons used

const descriptions = [
<p className = "bigger_text">Create an account or sign in to get started</p>,
<p className = "bigger_text">High level security with advanced encrytpion</p>,
<p className = "bigger_text">App runs on the cloud so you can access from anywhere</p>,
<p className = "bigger_text">Create multiple projects on your account</p>,
<p className = "bigger_text">Your project information is stored securly in our databases</p>
]; //descriptions of each icon

function resetTimeout() {
  if (timer.current) {
    clearTimeout(timer.current); //setting timer back to 0 if it just changed or if an arrow was pressed
  }
}

React.useEffect(() => {
  resetTimeout();
  timer.current = setTimeout(
    () =>
      setVal((prevIndex) => prevIndex === (icons.length-1) ? 0 : prevIndex+1 //taking care of loop
      ),
    3000 //timer time
  );

  return () => {
    resetTimeout();
  };
}, [imgNum]);

const updateVal = (input) => {

  if(input === "add"){
    setVal((prevIndex) => prevIndex === (icons.length-1) ? 0 : prevIndex+1); //taking care of loop
  }
  if(input === "sub"){
    setVal((prevIndex) => prevIndex === 0 ? icons.length-1 : prevIndex-1);// taking care of loop
  }

}


//Showing the current icon first along with the description and then the arrows
//if the arrows are pressed, they pass a value to tell the fuction to add or subtract
//the <centerForm> is a styled component using template literals to center all the conent
  return (
    <div>
      <CenterForm>
        {icons[imgNum]}
      </CenterForm>
      <CenterForm>
        {descriptions[imgNum]}
      </CenterForm>
      <CenterForm>
        <IconButton onClick={()=>updateVal("sub")}>
          <ArrowBackIosIcon/>
        </IconButton>
        <IconButton onClick={()=>updateVal("add")}>
          <ArrowForwardIosIcon/>
        </IconButton>
      </CenterForm>
    </div>
  
  );
}

class SignUp extends React.Component{
  //constructor with all of the variables used for this component
  constructor(props){
    super(props);
    this.state = {
    email:"",
    username: "",
    password: "",
    retype:"",
    error:false,
    blank:true
    };
  }
  //updates the email and checks to see if any options are still blank
  //TODO: disable signup button until all filled in
  setEmail(e){
    this.setState({email: e})
    if(e !== "" && this.state.username !== "" && this.state.password !== "" && this.state.retype !== ""){
      this.setState({blank:false});
    }
  }
  setUsername(user){
    this.setState({username: user})
  }
  //updates password and checks to see if the retype password box matches
  setPassword(pass){
    this.setState({password: pass})
    if(this.state.retype === pass){
      this.setState({error: false})
    }else{
      if(this.state.retype !== ""){
        this.setState({error: true})
      }else{
        this.setState({error: false})
      }
    }
  }
  //if passwords dont match, we set error to true to show a red box
  checkPassword(pass){
    this.setState({retype:pass});
    if(this.state.password === pass){
      this.setState({error: false})
    }else{
      if(pass !== ""){
        this.setState({error: true})
      }else{
        this.setState({error: false})
      }
      
    }
  }
  render(){
    
    //shows title and uses the CenterForm styled component to center everything
    //Text fields from MUI, when something is typed they update the value
    //the retype password text field has the error option in case the passwords dont match
    //buttons at the bottom of the page to finish sign up or go to sign in if they already have an account

    return (
      <div>
        
        
        <CenterForm>
          <h2>Sign Up</h2>
        </CenterForm>
        <CenterForm>
          <TextField onChange = {(event) => this.setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" margin="normal" />
        </CenterForm>
        <CenterForm>
          <TextField onChange = {(event) => this.setUsername(event.target.value)} id="outlined-basic" label="Username" variant="outlined" margin="normal" />
        </CenterForm>
        <CenterForm>
          <TextField onChange = {(event) => this.setPassword(event.target.value)} id="outlined-basic" label="Password" variant="outlined" margin="normal" />
        </CenterForm>
        <CenterForm>
          <TextField error={this.state.error} onChange = {(event) => this.checkPassword(event.target.value)} id="outlined-basic" label="Retype Password" variant="outlined" margin="normal" />
        </CenterForm>
       
        <CenterForm>
        <Link to='/signup' >
          <LogBtn>Sign Up</LogBtn>
        </Link>
        </CenterForm>

        <CenterForm>
         <p>Click here to sign in:</p>
         </CenterForm>

        <CenterForm>
        <Link to='/signin' >
        <LogBtn>Sign In</LogBtn>
      </Link>
        </CenterForm>
      </div>
    );

  }

}

function SignIn() {
  //creating two variables for username and password and the functions to change their values
  //setting both of their initial values to blank
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
    
      <CenterForm>
        <h2>Welcome!</h2>
      </CenterForm>
      <CenterForm>
        <TextField onChange = {(event) => setUsername(event.target.value)} id="outlined-basic" label="Username" variant="outlined" margin="normal" />
      </CenterForm>
      <CenterForm>
        <TextField onChange = {(event) => setPassword(event.target.value)} id="outlined-basic" label="Password" variant="outlined" margin="normal" />
      </CenterForm>
     
      <CenterForm>
      <Link to='/signin' >
        <LogBtn>Sign In</LogBtn>
      </Link>
      </CenterForm>

      <CenterForm>
      <p>Click here to sign up:</p>
      </CenterForm>

      <CenterForm>
      <Link to='/signup' >
        <LogBtn>Sign Up</LogBtn>
      </Link>
      </CenterForm>

    </div>
  );
}


