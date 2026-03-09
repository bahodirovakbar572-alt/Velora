import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3030;

app.use(express.static(path.join(__dirname, "../frontend")));

app.use(express.static(path.join(__dirname, "../img")));
  

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/about.html"));
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
}); 