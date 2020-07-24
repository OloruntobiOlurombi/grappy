import React from 'react';
import './App.scss';
import './components/login/style.scss';
import  UserLogin  from './components/login/UserLogin';
import Register  from './components/login/register';
import {  Switch, Route } from "react-router-dom";
import Home from "./components/Home";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLogginActive: true,
    }
  }

  // changeState(){
  //   const {isLogginActive} = this.state;
  //   if(isLogginActive){
  //     this.rightSide.classList.remove('right');
  //     this.rightSide.classList.add('left');
  //   }else {
  //     this.rightSide.classList.remove('left');
  //     this.rightSide.classList.add('right');
  //   }
  //   this.setState((prevState) => ({ isLogginActive: !prevState.isLogginActive}))
  // }
  render() {
    // const {isLogginActive} = this.state;
    // const current = isLogginActive ? "User Login" : " Register";
    // const currentActive = isLogginActive ? "Register" : " User Login";
    return (
      
        <div className="App">
       
        {/*
          <div className="login">
            <div className="container">
              {!isLogginActive && (
                <Register containerRef={(ref) => (this.current = ref)} />
              )}

              {isLogginActive && (
                <UserLogin containerRef={(ref) => (this.current = ref)} />
              )}
             
            </div>
                <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)}/>
          </div>
              */}
        <div>
        <Switch>
          <Route exact path='/' component={Register} />
          <Route exact path='/login' component={UserLogin} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>

        </div>
    
    );
  }
}



export default App;
