import './LoginTo.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginTo = ({ setUser, error, setError, login, setLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navitage = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in
        setUser(userCredential.user);
        console.log(userCredential.user);

        navitage('/');
      })
      .catch((error) => {
        setError(true);
      });
  };

  const goToRegister = (e) => {
    e.preventDefault();
    setLogin(!login);
  };

  return (
    <div>
      <form className='login-form'>
        <p className='login-form-title'>
          {' '}
          <span>Login</span>
          Form
        </p>
        <p className='login-form-req'>Register or Login to see Todo List!</p>
        <input
          className='main-input'
          type='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='main-input'
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' onClick={handleLogin} className='login-button'>
          Login
        </button>
        <button
          type='button'
          onClick={goToRegister}
          className='goToRegister-button'
        >
          Go to Register
        </button>
        {error && <span className='main-span'>Wrong email or password!</span>}
      </form>
    </div>
  );
};
