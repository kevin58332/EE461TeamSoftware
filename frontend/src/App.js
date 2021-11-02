import React from "react";
import Navbar from './components/Navbar';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SecurityIcon from '@material-ui/icons/Security';
import CloudIcon from '@material-ui/icons/Cloud';
import AddBoxIcon from '@material-ui/icons/AddBox';
import StorageIcon from '@material-ui/icons/Storage';
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';
import './App.css';
import { CircularProgress } from '@mui/material';
import {
  LogBtn,
  CenterForm,
  CenterSpace
} from './components/Navbar/NavbarElements';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";


//If signin is in the path, it will go to the sign in page
//If signup is in the path, it will go to the sign up page
//If the path is blank, it will go to the home screen
export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div>
        <Switch>
          <Route path="/signin"> 
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/project/:userID"  component={Project} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

class Project extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      counter:0,
      disbaled: false,
      data:null
    };
  }

  getData(){
    this.setState({disbaled:true});
    fetch("http://127.0.0.1:5000/api/data",{method:'post', headers:{"Content-Type": "application/json"}})
    .then(response => response.json())
    .then(data => {
      this.setState({data:data}); 
      console.log(data); 
      this.setState({disbaled:false});
    });
    
  }

  // const getRows = () => {
  //   return data.map((entry) => <tr><td>{entry[0]}</td><td>{entry[1]}</td></tr>);

  // }
  getRows(){
    return this.state.data.map((entry) => <tr key={this.state.counter++}><td>{entry[0]}</td><td>{entry[1]}</td><td><a href={entry[2]}>Click here to download zip</a></td></tr>);
  }
  render(){
  return (
    <div>
      <CenterForm>
       <h1>Hello: {this.props.match.params.userID.toString()}</h1>
      </CenterForm>
      <CenterForm>
      <LogBtn style={{backgroundColor:this.state.disbaled?"#808080":"#CC5500"}} disabled={this.state.disbaled} onClick={(event) => this.getData()} type = "submit">Get data</LogBtn>
      </CenterForm>
      <CenterSpace>
      {this.state.disbaled?<CircularProgress />:null}
      </CenterSpace>
      <CenterSpace>
      <table>
      <tbody>
      {this.state.data == null ? null:<tr><th>Name</th><th>Description</th><th>Download</th></tr>}
      {this.state.data == null ? null:this.getRows()}
      </tbody>
      </table>
      </CenterSpace>
    </div>
  
    );
  }
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
      <Navbar />
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
    blank:true,
    authenticated:false,
    suError:false,
    eCode:""
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

  submitClicked(){
    let info = {'username':this.state.username,'password':this.state.password,'email':this.state.email};
    fetch("http://127.0.0.1:5000/api/signup",{method:'post',headers:{"Content-Type": "application/json"},body:JSON.stringify(info)}).then(response => response.json()).then(data => {
      if(data.auth === 'done'){
        this.setState({authenticated:true});
      }else{
        this.setState({suError:true});
        this.setState({eCode:data.auth});
      }
      
    });
    
  }

  render(){
    
    //shows title and uses the CenterForm styled component to center everything
    //Text fields from MUI, when something is typed they update the value
    //the retype password text field has the error option in case the passwords dont match
    //buttons at the bottom of the page to finish sign up or go to sign in if they already have an account

    return (
      <div>
        <Navbar />
        
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
        {this.state.suError?<p style={{ color: 'red' }}>{this.state.eCode}</p>:<p> </p>}
      </CenterForm>
        <CenterForm>
          <LogBtn onClick={(event) => this.submitClicked()} type = "submit">Sign Up</LogBtn>
        </CenterForm>

        <CenterForm>
         <p>Click here to sign in:</p>
         </CenterForm>

        <CenterForm>
        <Link to='/signin' >
        <LogBtn>Sign In</LogBtn>
        </Link>
        </CenterForm>
        {this.state.authenticated?<Redirect to='/'/>:null}
      </div>
    );

  }

}

function SignIn() {
  //creating two variables for username and password and the functions to change their values
  //setting both of their initial values to blank
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated,setAuth] = useState(false);
  const [error,setError] = useState(false);
  const [errorCode,setErrorCode] = useState("");

  const submitClicked = ()=>{
    
    let info = {'username':username,'password':password};
    console.log(JSON.stringify(info))
    fetch("http://127.0.0.1:5000/api/signin",{method:'post',headers:{"Content-Type": "application/json"},body:JSON.stringify(info)}).then(response => response.json())
    .then(data => {
      if(data.auth === 'pass'){
        setAuth(true);
      }else{
        setError(true);
        setErrorCode(data.auth);
      }
      
    });
    
  }

  return (
    <div>
    <Navbar />
      <CenterForm>
        <h2>Welcome!</h2>
      </CenterForm>
      
      <CenterForm>
        <TextField name="username" onChange = {(event) => setUsername(event.target.value)} id="outlined-basic" label="Username" variant="outlined" margin="normal" />
      </CenterForm>
      <CenterForm>
        <TextField name="password" onChange = {(event) => setPassword(event.target.value)} id="outlined-basic" label="Password" variant="outlined" margin="normal" />
      </CenterForm>
      <CenterForm>
        {error?<p style={{ color: 'red' }}>{errorCode}</p>:<p> </p>}
      </CenterForm>
      <CenterForm>
      <LogBtn onClick={submitClicked} type = "submit">Sign In</LogBtn>
      </CenterForm>

    

      <CenterForm>
      <p>Click here to sign up:</p>
      </CenterForm>

      <CenterForm>
      <Link to='/signup' >
        <LogBtn>Sign Up</LogBtn>
      </Link>
      </CenterForm>
      {authenticated?<Redirect to='/'/>:null}
    </div>
  );
}

