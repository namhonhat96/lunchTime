import { useState } from 'react';
import axios from 'axios';

const projectID = '3256361b-5f0a-417d-a70f-8ff3bf93c4d0';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = ()=>{
    if (password !== confirmPassword) {
        setError('Password Mismatch');
    }else{
        setError('');
    }
  }
  const [firtname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password ,
                         'User-Confirm-Secret': confirmPassword, 'first-name': firtname, 
                         'last-name': lastname, 'avatar': null };

    try {
      await axios.post('https://api.chatengine.io/users', { headers: authObject });
      localStorage.removeItem('signUp');
      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Sign Up Form</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <input type="password" value={confirmPassword} onChange={(password, confirm) => setConfirmPassword(password.target.value, confirm.target.value)} className="input" placeholder="Confirm Password" required />
          <input type="text" value={firtname} onChange={(e) => setFirstName(e.target.value)} className="input" placeholder="First Name" />
          <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} className="input" placeholder="Last Name" />
          <input type="file" placeholder="Avatar"/>
          <div align="center">
            <button type="submit" className="button">
              <span>Sign Up</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default SignUp;
