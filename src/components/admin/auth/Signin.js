import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction } from '../actions/authActions';
import { connect } from 'react-redux';

class Signin extends Component {
  
  constructor() {
    super();
    this.state ={
      buttonText: 'Ingresar',
      buttonState: '',
    }
  }
  submit = (values) => { 
      this.props.signInAction(values, this.props.history);
  }
    
  errorMessage() {
    
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      );
    }
    
  }

  formButton() {
    if (this.props.loading) {
      return (
        <button type="submit" className="btn btn-primary btn-block" disabled ><i className="fa fa-circle-o-notch fa-spin"></i> Validando..</button>
      );
    }
    
    return (
      <button type="submit" className="btn btn-primary btn-block" > Ingresar</button>
    );
    
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form">
          <p>Ingrese al sistema con sus credenciales:</p>
          <form onSubmit={ handleSubmit(this.submit) }>
            <div className="form-group">
              <Field name="email"
                    component={renderField}
                    type="text"
                    label="Email"
                    placeholder="Email"     
              />
            </div>
            <div className="form-group">
              <Field name="password" 
                    component={renderField}
                    type="password"
                    placeholder="Contraseña" 
                    label="Contraseña"
              />
            </div>
            {this.formButton()}
          </form><br />
          {this.errorMessage()}
      </div>
    );
  }
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched &&
        ((error && <span className="field-error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const validate = values => {
  const errors = {}
  
  if (!values.email) {
    errors.email = 'Campo requerido'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'La dirección de email no es válida'
  }
  if (!values.password) 
    errors.password = 'Campo requerido'
  
  return errors
}

function mapStateToProps(state) {
 
  return { 
    errorMessage: state.auth.error,
    loading: state.auth.loading 
  };
}

const reduxFormSignin = reduxForm({
  form: 'signin',
  validate
})(Signin);


export default connect(mapStateToProps, {signInAction})(reduxFormSignin);