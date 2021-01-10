import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import googleLogin from './GoogleLogin';
import { Button } from "@material-ui/core";
import { UserContext} from "./UserContext";

class GoogleSocialAuth extends Component {
  static contextType = UserContext;

  render() {
    const user = this.context;

    return (
      <div className="App">
        {user.isSignedIn ? (
          <h1>Logged in</h1>
        ) : (
          <GoogleLogin
          clientId="351400190668-nj6qch3c235giuacshoe15vqfb0iol2a.apps.googleusercontent.com"
          render={renderProps => (<Button color="inherit" onClick={renderProps.onClick}>Login</Button>)}
          // onSuccess={(res) => {googleLogin(res.accessToken).then(r => console.log(r))}}
          onSuccess={(res) => (user.isSignedIn = res.isSignedIn())}
          onFailure={(res) => console.log(res)}
          cookiePolicy={'single_host_origin'}
        />
        )}

      </div>
    );
  }
}

export default GoogleSocialAuth;