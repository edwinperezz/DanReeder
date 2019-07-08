var express = require("express"),
	app		= express(),
	PORT	= process.env.PORT || 3000;

app.get("/", (req,res) => {
	res.send("Hello!");
});

app.listen(PORT, process.env.IP, function(){
	console.log("Server is up!");
});