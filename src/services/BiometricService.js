/**
 * BiometricService.js
 * Advanced physiological monitoring and fall detection.
 */
import { Accelerometer } from 'expo-sensors';

class BiometricService {
    constructor() {
        this.subscription = null;
        this.lastX = 0;
        this.lastY = 0;
        this.lastZ = 0;
        this.FALL_THRESHOLD = 30; // m/s^2 - High impact detection
    }

    /**
     * Start monitoring for falls and sudden impacts.
     */
    startFallDetection(onFallDetected) {
        Accelerometer.setUpdateInterval(100);
        this.subscription = Accelerometer.addListener(data => {
            const { x, y, z } = data;
            const acceleration = Math.sqrt(x * x + y * y + z * z);
            
            // Convert to G-force approximation
            const gForce = acceleration * 9.8;

            if (gForce > this.FALL_THRESHOLD) {
                console.log("CRITICAL IMPACT DETECTED:", gForce, "G");
                onFallDetected({
                    severity: 'HIGH',
                    gForce: gForce,
                    timestamp: Date.now()
                });
            }
        });
    }

    /**
     * Heart Rate Monitoring (Simulated logic for Wearable Sync)
     */
    async monitorHeartRate(callback) {
        // In production, this connects to Apple HealthKit or Google Fit
        setInterval(() => {
            const mockBpm = 70 + Math.floor(Math.random() * 10);
            callback(mockBpm);

            if (mockBpm > 160 || mockBpm < 40) {
                console.warn("Heart Rate Anomaly Detected:", mockBpm);
            }
        }, 5000);
    }

    stop() {
        this.subscription && this.subscription.remove();
    }
}

export default new BiometricService();
