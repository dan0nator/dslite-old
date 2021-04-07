import React from 'react';

//import amplify parts
import Amplify from 'aws-amplify';
import {Authenticator} from 'aws-amplify-react';
import awsconfig from './aws-exports';
import AuthWrapper from './auth/authwrapper';

import './App.css';

//configure aws config for auth
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Authenticator hideDefault={true} amplifyConfig={awsconfig}>
          <AuthWrapper />
        </Authenticator>
      </header>
    </div>
  )
}

export default App;
