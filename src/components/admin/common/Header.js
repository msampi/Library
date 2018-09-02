// Header.js
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    handleOpen = () => {
        this.setState({showModal:true})
    }
    handleClose = () => {
        this.setState({showModal:false})
    }
    handleOut = () => {
        //dispatch({ type: 'UNAUTHENTICATED' }) ????
        sessionStorage.removeItem("user");
        this.props.history.push('/');
    }
    render(){
        return (
            <header className="main-header">
                <Modal show={this.state.showModal}>
                    <Modal.Header>
                        <Modal.Title>Cerrar Sesión</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Esta seguro que desea salir de la aplicación?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose} bsStyle="default" >No</Button>
                        <Button onClick={this.handleOut} bsStyle="primary" >Si, cerrar sesión</Button>
                    </Modal.Footer>
                </Modal>
                <Link to="/" className="logo"> 
                    <span className="logo-mini"><b>B</b>I</span>
                    <span className="logo-lg"><b>Biblioteca</b>INNATA</span>
                </Link>
                <nav className="navbar navbar-static-top">
                    <a className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a onClick={this.handleOpen} >
                                    <i className="fa fa-power-off"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;
