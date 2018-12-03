import React, { Component } from 'react'
import { FontAwesome } from '@fortawesome/react-fontawesome'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default class GoogleButton extends Component {
  responseGoogle() {
    console.log('Response');
  }
  render() {
    return (
      <GoogleLogin
        clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      >
      <FontAwesome
        name='google'
      />
      <span> Login with Google</span>
      </GoogleLogin>
    )
  }
}
