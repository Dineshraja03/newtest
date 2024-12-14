import React, { useState } from 'react';
import './AdminPanel.css'; // Add your styles here

const AdminPanel = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [imageFiles, setImageFiles] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Hardcoded credentials for demo purposes
        if (username === '1' && password === '1') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    const handleFileChange = (e) => {
        setImageFiles([...e.target.files]);
    };

    const handleUpload = async () => {
        const token = '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'; // Replace with your GitHub token
        const repo = 'newtest'; // Replace with your repo name
        const owner = 'Dineshraja03'; // Replace with your GitHub username

        for (const file of imageFiles) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                const base64data = reader.result.split(',')[1];
                const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${file.name}`, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `token ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: `Add ${file.name}`,
                        content: base64data,
                    }),
                });

                if (response.ok) {
                    alert(`${file.name} uploaded successfully!`);
                } else {
                    alert(`Failed to upload ${file.name}`);
                }
            };
            reader.readAsDataURL(file);
        }
        setShowPopup(false);
        setImageFiles([]);
    };

    return (
        <div className="admin-panel">
            {!isLoggedIn ? (
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <div>
                    <button onClick={() => setShowPopup(true)}>Add Images</button>
                    {showPopup && (
                        <div className="popup">
                            <h2>Add Images</h2>
                            <input type="file" multiple accept="image/jpeg, image/png" onChange={handleFileChange} />
                            <button onClick={handleUpload}>Upload</button>
                            <button onClick={() => setShowPopup(false)}>Close</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AdminPanel; 