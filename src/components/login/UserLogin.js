import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import LoginImg from '../../login.svg';




class UserLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      username: "",
      password: "",
      errors: []
    }

  }

  showValidationErr(elm, msg) {
    this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }));
  }

  onUsername=(event)=>{
   this.setState({
      username: event.target.value
    })
  }

  onUserpassword=(event)=>{
    this.setState({
      password: event.target.value
    })
  }

  

  submitLogin=(e)=>{
    e.preventDefault();
    const user = window.localStorage.getItem("user");
    let username = user.split(" ")[0]
    let email = user.split(" ")[1]
    let password = user.split(" ")[2]
    console.log("username", username, "password", password)
    console.log("username", username);

    if(this.state.username !== username && this.state.password !== password ){
      this.showValidationErr("username or password", "Username or Password is not correct!");
    } else{
      this.props.history.push("/home")
    }

  }

  render() {
    
    return (
      <div className="base-container" ref={this.props.containerRef}>
        {Error}
        <form onSubmit={this.submit}>
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={LoginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  onChange={this.onUsername}
                  value={this.state.username}
                  
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={this.onUserpassword}
                  value={this.state.password}
                
                  
                />
              </div>
            </div>
          </div>

          <div className="footer">
           <button type="button" className="btn" onClick={this.submitLogin}>
              Login
            </button>
           
            <div>
              <p>Click The blue box on the left to Sign up</p>
            </div>
          </div>
        </form>
      </div>
    );
    
  }
 
}

export default UserLogin;




