import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { validateEmail } from '../utils/validations';
import { NUMBER_SIX } from '../utils/types';
import './Login.css';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    isLoginButtonDisabled: true,
  };

  shouldEnableLoginButton = () => {
    const { email, password } = this.state;
    const isEmailValid = validateEmail(email);
    const isPasswordValid = password.length >= NUMBER_SIX;
    const isLoginButtonDisabled = !(isEmailValid && isPasswordValid);
    this.setState({ isLoginButtonDisabled });
  };

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value }, this.shouldEnableLoginButton);
  };

  render() {
    const { email, password, isLoginButtonDisabled } = this.state;
    const { history } = this.props;

    return (
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          history.push('/menu');
        } }
        className="login-form"
        >
        <label htmlFor="email" className="login-form__label">
          <input
            className="login-form__input"
            placeholder="Email"
            type="email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password" className="login-form__label">
          <input
            className="login-form__input"
            placeholder="Password"
            type="password"
            id="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          disabled={ isLoginButtonDisabled }
          className="login-form__button"
        >
          Login
        </button>
      </form>
    )
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
