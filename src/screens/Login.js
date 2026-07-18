import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [id, setId] = useState('SENTINEL-X-882');

    return (
        <div style={styles.container}>
            <div style={styles.glassCard}>
                <div style={styles.logoContainer}>
                    <div style={styles.logoIcon}>S</div>
                    <h1 style={styles.logoText}>SENTINEL</h1>
                    <p style={styles.tagline}>ADVANCED LIFE PROTECTION</p>
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>OPERATOR ID</label>
                    <input 
                        style={styles.input} 
                        value={id} 
                        readOnly 
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>SECURE EMAIL</label>
                    <input 
                        style={styles.input} 
                        placeholder="operator@sentinel.ai"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button style={styles.loginBtn} onClick={onLogin}>
                    INITIALIZE SYSTEM
                </button>

                <p style={styles.footerText}>Biometric Encryption Active</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Inter, sans-serif'
    },
    glassCard: {
        width: '85%',
        padding: '40px 20px',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '30px',
        border: '1px solid rgba(0, 240, 255, 0.1)',
        textAlign: 'center',
        backdropFilter: 'blur(10px)'
    },
    logoContainer: { marginBottom: '40px' },
    logoIcon: {
        width: '60px', height: '60px', borderRadius: '15px',
        backgroundColor: '#00F0FF', color: '#000',
        fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 15px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)'
    },
    logoText: { color: '#fff', fontSize: '1.5rem', letterSpacing: '5px', fontWeight: '800', margin: 0 },
    tagline: { color: '#666', fontSize: '0.6rem', letterSpacing: '2px', marginTop: '5px' },
    inputGroup: { textAlign: 'left', marginBottom: '20px' },
    label: { color: '#00F0FF', fontSize: '0.6rem', fontWeight: 'bold', marginLeft: '10px' },
    input: {
        width: '100%', padding: '15px', backgroundColor: '#111', border: '1px solid #222',
        borderRadius: '12px', color: '#fff', marginTop: '5px', boxSizing: 'border-box'
    },
    loginBtn: {
        width: '100%', padding: '18px', backgroundColor: '#00F0FF', color: '#000',
        border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer',
        marginTop: '20px', letterSpacing: '1px'
    },
    footerText: { color: '#333', fontSize: '0.6rem', marginTop: '20px' }
};

export default Login;
