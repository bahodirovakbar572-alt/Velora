import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3030;

// Loyihaning asosiy papkasini aniqlaymiz (backend'dan bitta tepada)
const root = path.join(__dirname, "..");

// Statik papkalarni serverga ulaymiz
app.use(express.static(root)); // Asosiy papka (index.html va main.css uchun)
app.use('/img', express.static(path.join(root, 'img'))); // Rasmlar papkasi

// Sahifalarni yuborish
app.get("/", (req, res) => {
    res.sendFile(path.join(root, "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(root, "about.html"));
});

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});
