import React, { Component } from 'react';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Content from './common/Content';
import './css/admin.css';

class Main extends Component {
  
  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        <Sidebar />
        <Content />
      </div>
    );
  }
}


export default Main;