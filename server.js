const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 1312;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/Assets', express.static(path.join(__dirname, 'Assets')));

app.use("/api/auth", authRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/Starlight", {
})
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Database connection error:", err));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});