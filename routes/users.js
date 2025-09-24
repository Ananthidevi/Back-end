const express = require("express");
const router = express.Router();

router.post("/login",(req,res) => {
    //login logc
    res.send("Login successfuly");
});

router.post("/register",(req,res) => {
    //login logc
    res.send("Registration successfully done");
});

module.exports = router;