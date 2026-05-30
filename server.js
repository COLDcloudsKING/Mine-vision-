const express = require("express");
const cors = require("cors");
const MineVisionAI = require("./ai/mineVisionAI");

const app = express();
app.use(cors());
app.use(express.json());

const ai = new MineVisionAI();

// receive 20 screenshots analysis data
app.post("/analyze", (req, res) => {
  const screenshots = req.body.screenshots;

  if (!screenshots || screenshots.length < 1) {
    return res.status(400).json({ error: "No data sent" });
  }

  ai.updateFromScreenshots(screenshots);

  const result = ai.getPredictionGrid();

  res.json({
    success: true,
    analysis: result
  });
});

// simple test route
app.get("/", (req, res) => {
  res.send("MineVision AI Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
