import React, { useState, useEffect } from 'react';
// Note: In a real React Native environment, we would use 'react-native' components.
// This is a high-fidelity representation of the Dashboard logic and structure.

const Dashboard = () => {
    const [status, setStatus] = useState('SECURED');
    const [isAILive, setIsAILive] = useState(false);

    const toggleProtection = () => {
        setIsAILive(!isAILive);
        setStatus(isAILive ? 'SECURED' : 'SENTINEL ACTIVE');
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.logo}>SENTINEL</h1>
                <div style={styles.statusIndicator}>
                    <span style={isAILive ? styles.pulse : styles.static}></span>
                    {status}
                </div>
            </header>

            <main style={styles.main}>
                <div style={styles.radarContainer}>
                    <div style={isAILive ? styles.radarActive : styles.radarInactive}>
                        <div style={styles.innerCircle}>
                            <p style={styles.scanText}>{isAILive ? 'SCANNING ENVIRONMENT' : 'READY'}</p>
                        </div>
                    </div>
                </div>

                <div style={styles.statsRow}>
                    <div style={styles.statBox}>
                        <span style={styles.statLabel}>AI ACCURACY</span>
                        <span style={styles.statValue}>99.4%</span>
                    </div>
                    <div style={styles.statBox}>
                        <span style={styles.statLabel}>MESH NODES</span>
                        <span style={styles.statValue}>12 NEARBY</span>
                    </div>
                </div>

                <div style={styles.advancedStats}>
                    <div style={styles.advStatItem}>
                        <span style={styles.advLabel}>HEART RATE</span>
                        <span style={styles.advValue}>72 BPM</span>
                    </div>
                    <div style={styles.advStatItem}>
                        <span style={styles.advLabel}>LOCAL RISK</span>
                        <span style={styles.advValue} style={{color: '#00F0FF'}}>LOW</span>
                    </div>
                    <div style={styles.advStatItem}>
                        <span style={styles.advLabel}>GHOST MODE</span>
                        <span style={styles.advValue}>READY</span>
                    </div>
                </div>
            </main>

            <footer style={styles.footer}>
                <button 
                    onClick={toggleProtection}
                    style={isAILive ? styles.btnStop : styles.btnStart}
                >
                    {isAILive ? 'DEACTIVATE SENTINEL' : 'ACTIVATE PROTECTION'}
                </button>
                <p style={styles.footerNote}>Tap 5 times on volume to trigger Ghost Protocol</p>
            </footer>
        </div>
    );
};

const styles = {
    container: { backgroundColor: '#050505', color: '#fff', height: '100vh', padding: '20px', fontFamily: 'Inter, system-ui' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
    logo: { letterSpacing: '4px', fontSize: '1.2rem', fontWeight: '800', color: '#00F0FF' },
    statusIndicator: { display: 'flex', alignItems: 'center', fontSize: '0.8rem', fontWeight: 'bold' },
    pulse: { width: '8px', height: '8px', backgroundColor: '#00F0FF', borderRadius: '50%', marginRight: '8px', boxShadow: '0 0 10px #00F0FF' },
    static: { width: '8px', height: '8px', backgroundColor: '#444', borderRadius: '50%', marginRight: '8px' },
    radarContainer: { display: 'flex', justifyContent: 'center', margin: '60px 0' },
    radarActive: { 
        width: '250px', height: '250px', borderRadius: '50%', border: '1px solid #00F0FF',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        animation: 'spin 4s linear infinite'
    },
    radarInactive: { 
        width: '250px', height: '250px', borderRadius: '50%', border: '1px solid #333',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    innerCircle: { width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'rgba(0, 240, 255, 0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    scanText: { fontSize: '0.7rem', color: '#00F0FF', letterSpacing: '2px' },
    statsRow: { display: 'flex', justifyContent: 'space-between', gap: '20px', marginBottom: '40px' },
    statBox: { flex: 1, backgroundColor: '#111', padding: '15px', borderRadius: '12px', border: '1px solid #222' },
    statLabel: { display: 'block', fontSize: '0.6rem', color: '#666', marginBottom: '5px' },
    statValue: { fontSize: '1rem', fontWeight: 'bold' },
    advancedStats: { display: 'flex', justifyContent: 'space-between', backgroundColor: '#0A0A0A', padding: '15px', borderRadius: '12px', marginBottom: '30px' },
    advStatItem: { textAlign: 'center' },
    advLabel: { display: 'block', fontSize: '0.5rem', color: '#444', textTransform: 'uppercase' },
    advValue: { fontSize: '0.8rem', fontWeight: 'bold', color: '#fff' },
    footer: { textAlign: 'center' },
    btnStart: { width: '100%', padding: '18px', borderRadius: '15px', border: 'none', backgroundColor: '#00F0FF', color: '#000', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' },
    btnStop: { width: '100%', padding: '18px', borderRadius: '15px', border: '1px solid #ff4b4b', backgroundColor: 'transparent', color: '#ff4b4b', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' },
    footerNote: { fontSize: '0.7rem', color: '#444', marginTop: '15px' }
};

export default Dashboard;
