import React, { useState, useEffect } from 'react';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import MapScreen from './src/screens/MapScreen';

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('LOGIN');

    // Navigation logic simulation
    const navigateTo = (screen) => setCurrentScreen(screen);

    const renderScreen = () => {
        switch (currentScreen) {
            case 'LOGIN':
                return <Login onLogin={() => navigateTo('DASHBOARD')} />;
            case 'DASHBOARD':
                return (
                    <div>
                        <Dashboard />
                        <div style={navStyles.tabBar}>
                            <button style={navStyles.tabBtnActive} onClick={() => navigateTo('DASHBOARD')}>DASHBOARD</button>
                            <button style={navStyles.tabBtn} onClick={() => navigateTo('MAP')}>SAFETY MAP</button>
                        </div>
                    </div>
                );
            case 'MAP':
                return <MapScreen onBack={() => navigateTo('DASHBOARD')} />;
            default:
                return <Login onLogin={() => navigateTo('DASHBOARD')} />;
        }
    };

    return (
        <div style={navStyles.wrapper}>
            {renderScreen()}
        </div>
    );
};

const navStyles = {
    wrapper: { backgroundColor: '#000', minHeight: '100vh' },
    tabBar: { 
        position: 'fixed', bottom: 0, left: 0, right: 0, height: '70px', 
        backgroundColor: '#050505', borderTop: '1px solid #222', 
        display: 'flex', justifyContent: 'space-around', alignItems: 'center' 
    },
    tabBtn: { background: 'none', border: 'none', color: '#444', fontSize: '0.7rem', fontWeight: 'bold' },
    tabBtnActive: { background: 'none', border: 'none', color: '#00F0FF', fontSize: '0.7rem', fontWeight: 'bold' }
};

export default App;
