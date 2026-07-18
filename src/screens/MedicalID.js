import React from 'react';

const MedicalID = ({ onBack }) => {
    const data = {
        name: "John Doe",
        bloodType: "O-Negative",
        allergies: "Penicillin, Peanuts",
        medications: "None",
        emergencyContact: "Jane Doe (+27 82 000 0000)",
        medicalConditions: "Asthma"
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <button onClick={onBack} style={styles.backBtn}>←</button>
                <h2 style={styles.headerTitle}>MEDICAL ID</h2>
            </div>

            <div style={styles.card}>
                <div style={styles.item}>
                    <span style={styles.label}>BLOOD TYPE</span>
                    <span style={styles.value} style={{color: '#ef4444'}}>{data.bloodType}</span>
                </div>
                <div style={styles.item}>
                    <span style={styles.label}>ALLERGIES</span>
                    <span style={styles.value}>{data.allergies}</span>
                </div>
                <div style={styles.item}>
                    <span style={styles.label}>CONDITIONS</span>
                    <span style={styles.value}>{data.medicalConditions}</span>
                </div>
                <div style={styles.item}>
                    <span style={styles.label}>EMERGENCY CONTACT</span>
                    <span style={styles.value}>{data.emergencyContact}</span>
                </div>
            </div>

            <div style={styles.footerNote}>
                This information is accessible from the lock screen to assist first responders.
            </div>
        </div>
    );
};

const styles = {
    container: { height: '100%', padding: '20px', background: '#fff', fontFamily: 'Inter, sans-serif' },
    header: { display: 'flex', alignItems: 'center', marginBottom: '30px' },
    backBtn: { background: 'none', border: 'none', fontSize: '1.5rem', color: '#1a1c1e', cursor: 'pointer' },
    headerTitle: { flex: 1, textAlign: 'center', fontSize: '1rem', fontWeight: '800' },
    card: { background: '#f8fafc', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' },
    item: { borderBottom: '1px solid #e2e8f0', padding: '15px 0' },
    label: { display: 'block', fontSize: '0.6rem', color: '#64748b', fontWeight: 'bold' },
    value: { fontSize: '0.9rem', fontWeight: 'bold', color: '#1a1c1e' },
    footerNote: { textAlign: 'center', fontSize: '0.7rem', color: '#94a3b8', marginTop: '30px' }
};

export default MedicalID;
