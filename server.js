const express = require("express");
const cors = require("cors");
const { generateRecommendation } = require("./services/recommendationEngine");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Mine Vision is running successfully 🚀");
});

app.get("/test", (req, res) => {
    res.json(generateRecommendation());
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
