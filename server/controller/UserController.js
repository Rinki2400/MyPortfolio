require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.loginUser = (req, res) => {
    try {
        const { email, password } = req.body;

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!email || !password) {
            return res.status(400).json({ success:false, message:"Email & Password required" });
        }

        if (email !== adminEmail || password !== adminPassword) {
            return res.status(401).json({ success:false, message:"Invalid email or password" });
        }

        const token = jwt.sign(
            { email, role: "admin" },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.status(200).json({
            success:true,
            message:"Login Success",
            token
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success:false, message:"Server Error" });
    }
};
