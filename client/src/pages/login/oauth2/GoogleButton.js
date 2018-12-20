import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default class GoogleButton extends Component {
  responseGoogle() {
    console.log('Response');
  }
  render() {
    return (
      <GoogleLogin
        clientId={'437888369132-3k01mhalt3uilq0i1umb6o883r065g9k.apps.googleusercontent.com'}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      >
      {/* <FontAwesomeIcon
        icon='google'
      /> */}
      <span> Login with Google</span>
      </GoogleLogin>
    )
  }
}
