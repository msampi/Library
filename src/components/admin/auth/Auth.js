import React, { Component } from 'react';
import Signin from './Signin';
import '../css/auth.css';

class Auth extends Component {
  
  render () {
    
    return (
        <div>
            <video autoPlay muted loop id="video">
                <source src="./../../video/Travaho.mp4" type="video/mp4"></source>
            </video>
            <div className="auth-box">
                <div className="col-md-12 text-center">
                    <h2>BIBLIOTECA<strong>INNATA</strong></h2><br/>
                </div>
                <div className="row">
                    <div className="col-md-12">    
                        <Signin history={this.props.history}/>
                    </div>
                </div> 
            </div>
        </div>

    );
  }
}

export default Auth;