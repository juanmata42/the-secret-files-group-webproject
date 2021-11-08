import React, { useContext, useEffect, useState } from 'react';
import './account-page.scss';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../loading/loading';
import UserDataContext from '../../context/user/userDataContext';

export default function AccountPage() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const { userState, getUser, getProfile } = useContext(UserDataContext);

  const initialStateValue = {
    username: '',
    twitter: '',
    instagram: '',
  };
  const [values, setValues] = useState(initialStateValue);

  /*   useEffect(() => {
    console.log(userState);
  }, []); */

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...initialStateValue });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('hola', e.target);
    setValues({ ...values, [name]: value });
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="containerFormAccount">
        <div className="form-account">
          {isAuthenticated && (
            <div>
              <img src={user?.picture} alt={user.given_name} />
              {user.given_name}
            </div>
          )}
          <h1 className="title-account">Account details</h1>
          <div className="input-container-account ic1">
            <input
              id="username"
              required
              className="input-account"
              type="text"
              name="username"
              placeholder="username"
              onChange={handleInputChange}
              value={values.username}
            />
          </div>
          {/* commented for deletion after testing <div className="input-container-account ic2">
            <input
              id="email"
              className="input-account"
              type="text"
              name="email"
              placeholder="email"
              onChange={handleInputChange}
              value={values.email}
            />
          </div>
          <div className="input-container-account ic2">
            <input
              id="password"
              className="input-account"
              type="text"
              name="password"
              placeholder="password"
              onChange={handleInputChange}
              value={values.password}
            />
          </div> */}
          <div className="input-container-account ic2">
            <input
              id="twitter"
              className="input-account"
              type="text"
              name="twitter"
              placeholder="twitter"
              onChange={handleInputChange}
              value={values.twitter}
            />
          </div>
          <div className="input-container-account ic2">
            <input
              id="instagram"
              className="input-account"
              type="text"
              name="instagram"
              placeholder="instagram"
              onChange={handleInputChange}
              value={values.instagram}
            />
          </div>
          <button type="submit" className="submit-account">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

/*  export default withAuthenticationRequired(AccountPage, {
  onRedirecting: () => <Loading />,
}); */
