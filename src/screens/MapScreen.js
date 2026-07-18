import React from 'react';

const MapScreen = ({ onBack }) => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <button onClick={onBack} style={styles.backBtn}>←</button>
                <h2 style={styles.headerTitle}>SAFETY HEATMAP</h2>
            </div>

            <div style={styles.mapArea}>
                {/* Visual Simulation of a Map with Heatmap Overlays */}
                <div style={styles.mapOverlay}>
                    <div style={styles.userDot}></div>
                    <div style={styles.dangerZone1}></div>
                    <div style={styles.dangerZone2}></div>
                    <div style={styles.meshNode1}></div>
                    <div style={styles.meshNode2}></div>
                </div>
                
                <div style={styles.legend}>
                    <div style={styles.legendItem}>
                        <span style={{...styles.dot, backgroundColor: '#ff4b4b'}}></span>
                        <span>High Crime Zone</span>
                    </div>
                    <div style={styles.legendItem}>
                        <span style={{...styles.dot, backgroundColor: '#00F0FF'}}></span>
                        <span>Mesh Node</span>
                    </div>
                </div>
            </div>

            <div style={styles.infoCard}>
                <h3 style={styles.cardTitle}>Route Analysis</h3>
                <p style={styles.cardText}>Current path is 92% safe. Suggested diversion in 200m to avoid unlit area.</p>
                <button style={styles.actionBtn}>ACTIVATE ESCORT MODE</button>
            </div>
        </div>
    );
};

const styles = {
    container: { height: '100vh', backgroundColor: '#050505', color: '#fff', fontFamily: 'Inter, sans-serif' },
    header: { padding: '20px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #111' },
    backBtn: { background: 'none', border: 'none', color: '#00F0FF', fontSize: '1.5rem', cursor: 'pointer' },
    headerTitle: { flex: 1, textAlign: 'center', fontSize: '0.9rem', letterSpacing: '2px', color: '#666' },
    mapArea: { 
        height: '60%', backgroundColor: '#111', margin: '20px', borderRadius: '20px', 
        position: 'relative', overflow: 'hidden', border: '1px solid #222',
        backgroundImage: 'radial-gradient(#222 1px, transparent 1px)',
        backgroundSize: '20px 20px'
    },
    mapOverlay: { position: 'relative', width: '100%', height: '100%' },
    userDot: { position: 'absolute', top: '50%', left: '50%', width: '12px', height: '12px', backgroundColor: '#fff', borderRadius: '50%', boxShadow: '0 0 15px #fff' },
    dangerZone1: { position: 'absolute', top: '20%', left: '30%', width: '100px', height: '100px', backgroundColor: 'rgba(255, 75, 75, 0.2)', borderRadius: '50%', filter: 'blur(20px)' },
    dangerZone2: { position: 'absolute', top: '60%', left: '70%', width: '80px', height: '80px', backgroundColor: 'rgba(255, 75, 75, 0.15)', borderRadius: '50%', filter: 'blur(15px)' },
    meshNode1: { position: 'absolute', top: '40%', left: '60%', width: '6px', height: '6px', backgroundColor: '#00F0FF', borderRadius: '50%' },
    meshNode2: { position: 'absolute', top: '75%', left: '25%', width: '6px', height: '6px', backgroundColor: '#00F0FF', borderRadius: '50%' },
    legend: { position: 'absolute', bottom: '10px', left: '10px', padding: '10px', backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '10px' },
    legendItem: { display: 'flex', alignItems: 'center', fontSize: '0.6rem', marginBottom: '5px' },
    dot: { width: '8px', height: '8px', borderRadius: '50%', marginRight: '8px' },
    infoCard: { padding: '0 20px' },
    cardTitle: { fontSize: '1rem', color: '#00F0FF', marginBottom: '5px' },
    cardText: { fontSize: '0.8rem', color: '#888', lineHeight: '1.4' },
    actionBtn: { width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #00F0FF', backgroundColor: 'transparent', color: '#00F0FF', fontWeight: 'bold', marginTop: '15px' }
};

export default MapScreen;
