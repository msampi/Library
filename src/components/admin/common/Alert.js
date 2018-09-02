import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Alert extends Component {
    
    
    handleClose = () => {
        this.props.dispatch({ type: 'ALERT_HIDE' });
    }

    
    render(){
        return (
            
            <Modal show={this.props.alert}>
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.body}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose} bsStyle="primary" >Cerrar</Button>
                </Modal.Footer>
            </Modal>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        alert: state.alert,
    };
};


export default connect(mapStateToProps)(Alert);
