import React, { Component } from 'react';

class Preloader extends Component {
  
  render () {
    
    return (
        <div id="preloader" className={this.props.show ? '' : 'hidden'}>
            <div id="preloader-container">
                <div className="fa fa-circle-o-notch fa-spin"></div>
                <p>{this.props.title}</p>
            </div>
        </div>

    );
  }
}

export default Preloader;