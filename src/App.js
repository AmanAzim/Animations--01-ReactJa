import React, { Component } from "react";
import Transition from 'react-transition-group/Transition'

import "./App.css";
import Modal from "./components/Modal/Modal";
import Modal2 from "./components/Modal/Modal_2";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state={
    modalIsOpen:false,
    modalIsOpen2:false,
    showBlock: false
  };

  showModal=()=>{
      this.setState({modalIsOpen: true})
  };
    showModal2=()=>{
        this.setState({modalIsOpen2: true})
    };

  closeModal=()=>{
      this.setState({modalIsOpen: false})
  };
    closeModal2=()=>{
        this.setState({modalIsOpen2: false})
    };

    //          {this.state.showBlock? <div style={{backgroundColor:'red', width: 100, height: 100, margin:'auto'}} ></div> : null}
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>

          <button onClick={()=>this.setState((prevState)=>({showBlock: !prevState.showBlock}))} className="Button">Toggle</button>

          <Transition in={this.state.showBlock} timeout={300} mountOnEnter unmountOnExit>
              {/* "mountOnEnter" mounts the element to the dom when the "in={}" is true and the "unmountOnExit" removes the element when the "in is false"*/}
              {/* {(state)=><p>{state}</p>} */}

              {(state)=>(
                  <div style={{
                      backgroundColor:'red',
                      width: 100,
                      height: 100,
                      margin:'auto',
                      transition: 'opacity 1s ease-out',
                      opacity: state==='exiting'? 0:1
                  }}>
                  </div>
              )}

              {/*<div style={{backgroundColor:'red', width: 100, height: 100, margin:'auto'}} ></div>*/}
          </Transition>

          <br></br>

          <Transition in={this.state.modalIsOpen} timeout={3000} mountOnEnter unmountOnExit
                      onEnter={()=>console.log('OnEnter')}
                      onEntering={()=>console.log('OnEntering')}
                      onEntered={()=>console.log('OnEntered')}
                      onExit={()=>console.log('OnExit')}
                      onExiting={()=>console.log('OnExiting')}
                      onExited={()=>console.log('OnExited')} >

              {(state)=>(
                  <Modal show={state} closed={this.closeModal}/>
              )}
          </Transition>

          {this.state.modalIsOpen? <Backdrop show /> : null}



          <Modal2 show={this.state.modalIsOpen2} closed={this.closeModal2}/>
          {this.state.modalIsOpen2? <Backdrop show /> : null}


        <button className="Button" onClick={this.showModal}>Open Modal</button>
          <br></br>
        <button className="Button" onClick={this.showModal2}>Open Modal 2</button>

        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
