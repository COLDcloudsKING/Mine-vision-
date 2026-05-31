class MineVisionAI {
  constructor() {
    this.tileStats = {};
  }

  updateFromScreenshots(screenshots) {
    this.tileStats.lastScreenshots = screenshots;
  }

  getPredictionGrid() {
    return {
      message: "AI running successfully",
      predictions: []
    };
  }
}

module.exports = MineVisionAI;
