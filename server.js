const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 2003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
const assetsDir = path.join(__dirname, 'Assets');
app.use('/Assets', express.static(assetsDir));

app.use("/api/auth", authRoutes);

mongoose.connect("mongodb://127.0.0.1:27018/Starlight", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Database connection error:", err));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
