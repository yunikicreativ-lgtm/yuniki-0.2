/**
 * NeuralLearningEngine.js
 * Implements a Personalized Behavior Model (Self-Learning AI).
 * This engine learns the user's "Baseline" to reduce false alarms and detect subtle anomalies.
 */

class NeuralLearningEngine {
    constructor() {
        this.isLearning = true;
        this.dataPointsCollected = 0;
        this.REQUIRED_POINTS = 100; // Points needed to establish a "Baseline"
        
        // User Baseline Profiles
        this.baseline = {
            avgHeartRate: 70,
            maxWalkingVelocity: 1.4, // m/s
            typicalEnvironmentVolume: 40, // dB
            commonLocations: []
        };
    }

    /**
     * Continuous Learning Loop
     * This would be called in the background to "learn" the user.
     */
    learnUserPattern(newData) {
        if (!this.isLearning) return;

        console.log("NEURAL: Absorbing user behavior data...");

        // Incremental Average Calculation (Self-Learning logic)
        this.baseline.avgHeartRate = (this.baseline.avgHeartRate * 0.9) + (newData.heartRate * 0.1);
        this.baseline.maxWalkingVelocity = Math.max(this.baseline.maxWalkingVelocity, newData.velocity);
        
        this.dataPointsCollected++;

        if (this.dataPointsCollected >= this.REQUIRED_POINTS) {
            this.isLearning = false;
            console.log("NEURAL: Personal Baseline Established. System is now fully personalized.");
        }
    }

    /**
     * Anomaly Detection (The "Brain" part)
     * Compares real-time data against the learned Baseline.
     */
    detectAnomalousBehavior(currentData) {
        // If heart rate is 2x the learned average and velocity is 0 (Fainting/Heart Attack)
        if (currentData.heartRate > (this.baseline.avgHeartRate * 1.8) && currentData.velocity < 0.2) {
            return {
                type: 'PHYSIOLOGICAL_ANOMALY',
                severity: 'CRITICAL',
                reason: 'Heart rate spiked while immobile (Learned Baseline Exceeded)'
            };
        }

        // Unusual noise levels for this user (e.g. scream in a quiet environment)
        if (currentData.volume > (this.baseline.typicalEnvironmentVolume + 40)) {
            return {
                type: 'ENVIRONMENTAL_ANOMALY',
                severity: 'HIGH',
                reason: 'Sudden audio peak relative to user baseline'
            };
        }

        return null;
    }

    getLearningStatus() {
        return {
            progress: (this.dataPointsCollected / this.REQUIRED_POINTS) * 100,
            status: this.isLearning ? 'LEARNING_HABITS' : 'PERSONALIZED'
        };
    }
}

export default new NeuralLearningEngine();
