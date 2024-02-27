import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
       
        setUserData({ username: storedUsername, password:storedPassword });
    }, []);


    return (
        <div>
            <h2>welcome</h2>
            {userData && (
                <div>
                    <p>Username: {userData.username}</p>
                    <p>Password: {userData.password}</p>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;