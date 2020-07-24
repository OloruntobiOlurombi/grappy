import React from "react";
import LoginImg from "../../login.svg";
import {  withRouter } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state={username: "", email: "", password:"", errors: []};
    
  }
 
  showValidationErr(elm, msg){
    this.setState((prevState) => ({ errors: [...prevState.errors, {elm, msg}] } ));
  }

  clearValidationErr(elm){
    this.setState((prevState) =>{
      let newArr = [];
      for(let err of prevState.errors) {
        if(elm !== err.elm){
          newArr.push(err);
        }
      }
      return {errors: newArr}
    })
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value});
    this.clearValidationErr("username");
  }

  onEmailChange(e){
    this.setState({ email: e.target.value });
    this.clearValidationErr("email");
  }

  onPasswordChange(e){
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");
  }

  submitRegister = (e) => {
    e.preventDefault();
    if(this.state.username === ""){
       this.showValidationErr("username", "Username Cannot be empty!");
    }if (this.state.email === "") {
      this.showValidationErr("email", "Email Cannot be empty!");
    } if(this.state.password === ""){
      return this.showValidationErr("password", "Password Cannot be empty!");
    }
    let user = `${this.state.username} ${this.state.email} ${this.state.password}`
    window.localStorage.setItem("user", user)
    this.props.history.push("/login");
  }

  render() {

    let usernameErr = null, passwordErr = null, emailErr = null;

    for(let err of this.state.errors) {
      if(err.elm === "username") {
        usernameErr = err.msg;
      }if(err.elm === "password") {
        passwordErr = err.msg
      }if(err.elm === "email") {
          emailErr = err.msg
      }
    }
    return (
      <form action="">
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Sign Up</div>
          <div className="content">
            <div className="image">
              <img src={LoginImg} alt=""/>
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  onChange={this.onUsernameChange.bind(this)}
                />
                <small className="danger-error">
                  {usernameErr ? usernameErr : ""}
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={this.onEmailChange.bind(this)}
                />
                <small className="danger-error">
                  {emailErr ? emailErr : ""}
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={this.onPasswordChange.bind(this)}
                />
                <small className="danger-error">
                  {passwordErr ? passwordErr : ""}
                </small>

               

              </div>
            </div>
          </div>

          <div className="footer">
          {/*<Link to="/login">*/}
            <button
              type="button"
              className="btn"
              onClick={this.submitRegister}
            >
              Sign up
            </button>
            {/*</Link>*/}
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(Register);