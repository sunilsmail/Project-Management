require('dotenv').config();
const express = require('express');
const { connectDB, sequelize } = require('./config/db');

connectDB();

const app = express();
app.use(express.json());

// Sync database & create tables if not exist
sequelize.sync().then(() => {
    console.log('Database & tables synced!');
});

// Import routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

