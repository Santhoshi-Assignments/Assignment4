import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleRegistration = () => {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);


        history.push('/login');
    };

    return (
        <div>
            <h2>Registration Page</h2>
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default RegistrationPage;