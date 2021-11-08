import { useState, useEffect, useContext } from 'react';
import UserDataContext from '../../context/user/userDataContext';
import SeriesContext from '../../context/series/seriesContext';
import './login-page.scss';
//qwerty creo que esta página no es necesaria y podría borrarse
export default function LoginPage() {
  const initialStateValue = { username: '', password: '' };
  const [loginValue, setLogin] = useState(initialStateValue);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin({ ...initialStateValue });
  };
  // la página solo renderiza.
  return (
    <div>
      <form className="container-form-login" onSubmit={handleSubmit}>
        <div className="form-login">
          <h1 className="title-login">Login</h1>

          <div className="input-container-login ic1">
            <input
              id="username"
              required
              className="input-login"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleInputChange}
              value={loginValue.username}
            />
          </div>
          <div className="input-container-login ic2">
            <input
              id="password"
              className="input-login"
              type="text"
              name="password"
              placeholder="password"
              value={loginValue.password}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="submit-login">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
