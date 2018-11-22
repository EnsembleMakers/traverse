import React, { Component } from "react";

class SignIn extends Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <form class="ui form large">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon" />
                <input type="text" name="email" placeholder="E-mail address" />
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon" />
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div class="ui fluid large teal submit button">Login</div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
