import React, { useState } from 'react';

const User = ({ handleSubmit}) => {
    const [userId, setUserId] = useState('');
    return (
        <div style={styles.container}>
            <form onSubmit={(e)=>handleSubmit(e, userId)} style={styles.form}>
                <h2 style={styles.title}>Submit User ID</h2>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter User ID"
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f4f4f4',
    },
    form: {
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
    },
    title: {
        textAlign: 'center',
    },
    input: {
        width: '90%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        backgroundColor: '#5e5de3',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
    },
};

export default User;
