import React, { useState, useEffect } from 'react';

const CrisisScreen = ({ onSafe }) => {
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        if (seconds > 0) setTimeout(() => setSeconds(seconds - 1), 1000);
    }, [seconds]);

    return (
        <div style={styles.container}>
            <div style={styles.alertHeader}>
                <div style={styles.emergencyIcon}>⚠️</div>
                <h1 style={styles.alertTitle}>DISTRESS DETECTED</h1>
                <p style={styles.alertSub}>Acoustic AI: "High Frequency Scream"</p>
            </div>

            <div style={styles.timerCircle}>
                <span style={styles.timerText}>{seconds}s</span>
                <p style={styles.timerLabel}>Until Authority Dispatch</p>
            </div>

            <div style={styles.evidenceLog}>
                <div style={styles.logHeader}>SECURE EVIDENCE STREAM</div>
                <div style={styles.logEntry}>[00:01] Audio recording initialized...</div>
                <div style={styles.logEntry}>[00:02] GPS coordinates locked (30.04N, 31.23E)</div>
                <div style={styles.logEntry}>[00:03] Streaming data to Sentinel Cloud...</div>
                <div style={styles.logEntry}>[00:04] Ghost Protocol active: Screen Blackout...</div>
            </div>

            <button style={styles.safeBtn} onClick={onSafe}>
                I AM SAFE (Enter PIN)
            </button>
            <p style={styles.discreetNote}>Press Power button 3 times for silent override</p>
        </div>
    );
};

const styles = {
    container: { height: '100vh', backgroundColor: '#450000', color: '#fff', padding: '30px', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif' },
    alertHeader: { textAlign: 'center', marginBottom: '40px' },
    emergencyIcon: { fontSize: '3rem', animation: 'pulse 1s infinite' },
    alertTitle: { fontSize: '1.5rem', fontWeight: '900', letterSpacing: '2px', margin: '10px 0' },
    alertSub: { fontSize: '0.8rem', color: '#ff8a8a' },
    timerCircle: { 
        width: '150px', height: '150px', borderRadius: '50%', border: '4px solid #fff',
        margin: '0 auto 40px', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignItems: 'center' 
    },
    timerText: { fontSize: '3rem', fontWeight: 'bold' },
    timerLabel: { fontSize: '0.5rem', textTransform: 'uppercase' },
    evidenceLog: { backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '15px', padding: '15px', height: '150px', overflowY: 'hidden', marginBottom: '30px' },
    logHeader: { fontSize: '0.6rem', color: '#ff4b4b', fontWeight: 'bold', marginBottom: '10px' },
    logEntry: { fontSize: '0.6rem', color: '#ccc', marginBottom: '5px', fontFamily: 'monospace' },
    safeBtn: { width: '100%', padding: '20px', backgroundColor: '#fff', color: '#450000', border: 'none', borderRadius: '15px', fontWeight: 'bold', fontSize: '1rem' },
    discreetNote: { textAlign: 'center', fontSize: '0.6rem', color: '#ff8a8a', marginTop: '20px' }
};

export default CrisisScreen;
