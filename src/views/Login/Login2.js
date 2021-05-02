import React, { Component } from 'react';


 class Login extends Component {
  render() {
    return (
        <div class="page-login nine wide column ui centered grid container">
          <div class="ui icon warning message">
              <i class="lock icon"></i>
              <div class="content">
                <div class="header">
                  Login failed!
                </div>
                <p>You might have misspelled your username or password!</p>
            </div>
          </div>
          <div class="ui fluid card">
            <div class="content">
              <form class="ui form" method="POST">
                <div class="field">
                  <label>User</label>
                  <input type="text" name="user" placeholder="User" />
                </div>
                <div class="field">
                  <label>Password</label>
                  <input type="password" name="pass" placeholder="Password" />
                </div>
                <button class="ui primary labeled icon button" type="submit">
                  <i class="unlock alternate icon"></i>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

 export default Login;