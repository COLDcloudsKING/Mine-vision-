# Mine-vision-
App
class MineVisionAI {
  constructor() {
    this.tileStats = {};
  }

  updateFromScreenshots(data) {
    data.forEach(scan => {
      scan.forEach(tile => {
        const key = `${tile.x},${tile.y}`;

        if (!this.tileStats[key]) {
          this.tileStats[key] = { safe: 0, risk: 0, total: 0 };
        }

        this.tileStats[key].total++;

        if (tile.state === "safe") {
          this.tileStats[key].safe++;
        } else {
          this.tileStats[key].risk++;
        }
      });
    });
  }

  getPredictionGrid() {
    let result = [];

    for (let key in this.tileStats) {
      const t = this.tileStats[key];

      const safePercent = (t.safe / t.total) * 100;
      const riskPercent = (t.risk / t.total) * 100;

      let label = "⚖️";
      if (safePercent > 70) label = "💎";
      if (riskPercent > 60) label = "💣";

      result.push({
        tile: key,
        safePercent: safePercent.toFixed(1),
        riskPercent: riskPercent.toFixed(1),
        label
      });
    }

    return result;
  }

  learnFromUserChoice(tileKey, success) {
    if (!this.tileStats[tileKey]) return;

    if (success) {
      this.tileStats[tileKey].safe++;
    } else {
      this.tileStats[tileKey].risk++;
    }

    this.tileStats[tileKey].total++;
  }
}

module.exports = MineVisionAI;
