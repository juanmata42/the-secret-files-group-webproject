import { useState } from 'react';
import './register-page.scss';
//qwerty creo que esta página no es necesaria y podría borrarse
export default function RegisterPage() {
  const initialStateValue = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [values, setValues] = useState(initialStateValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...initialStateValue });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="containerForm">
        <div className="form-register">
          <h1 className="title-register">Register</h1>

          <div className="input-container ic1">
            <input
              id="username"
              onChange={handleInputChange}
              required
              className="input-register"
              type="text"
              name="username"
              placeholder="Username"
              value={values.username}
            />
          </div>
          <div className="input-container ic2">
            <input
              id="email"
              className="input-register"
              type="text"
              name="email"
              placeholder="email"
              onChange={handleInputChange}
              value={values.email}
            />
          </div>
          <div className="input-container ic2">
            <input
              id="password"
              className="input-register"
              type="text"
              name="password"
              placeholder="password"
              onChange={handleInputChange}
              value={values.password}
            />
          </div>

          <div className="input-container ic2">
            <input
              id="confirmPassword"
              className="input-register"
              type="text"
              name="confirmPassword"
              placeholder="confirm password"
              onChange={handleInputChange}
              value={values.confirmPassword}
            />
          </div>

          <button type="submit" className="submit-register">
            Register
          </button>
        </div>
      </form>
    </>
  );
}
