import React from 'react';
import {SignIn} from 'aws-amplify-react';
import logo from './images/DS.jpg'

export class CustomSignIn extends SignIn {
    constructor(props){
        super(props)
        this._validAuthStates = ['signIn','signedOut','signedUp']
    }

    showComponent(theme) {
        return(
            <div className="mx-auto w-full max-w-xs">
            <BImg
          mb="4"
          src={logo}
          width="72"
          height="72"
        />
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  key="username"
                  name="username"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Username"
                />
              </div>
              .....omitted.....
            </form>
          </div>
        )
    }
}