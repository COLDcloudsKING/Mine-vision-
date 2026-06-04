function generateRecommendation() {
    return {
        status: "success",

        screenshotsAnalyzed: 0,

        mineSetting: null,

        learningLevel: "Beginner",

        recommendationBoard: [],

        heatmap: [],

        confidenceScores: [],

        trendAnalysis: {
            recent5: [],
            recent10: [],
            recent20: []
        },

        recommendationExpiry:
            "Upload new screenshots for a fresh analysis",

        message:
            "MineVision AI is active and waiting for screenshot analysis"
    };
}

module.exports = {
    generateRecommendation
};
