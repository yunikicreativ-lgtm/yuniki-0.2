/**
 * FirstAidAI.js
 * Interactive AI that provides real-time medical instructions.
 */

class FirstAidAI {
    getInstructions(type) {
        const guides = {
            'CPR': [
                "Place hands in center of chest.",
                "Push hard and fast (100-120 bpm).",
                "App is pulsing your flashlight to the rhythm now."
            ],
            'CHOKING': [
                "Stand behind the person.",
                "Perform 5 abdominal thrusts (Heimlich maneuver).",
                "Repeat until object is forced out."
            ],
            'BLEEDING': [
                "Apply direct pressure with clean cloth.",
                "Maintain pressure until help arrives.",
                "If severe, apply tourniquet above wound."
            ]
        };
        return guides[type] || ["Stay calm. Emergency services are on the way."];
    }
}

export default new FirstAidAI();
