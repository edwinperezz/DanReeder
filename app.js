var express 	= require("express"),
	app			= express();

const PORT		= process.env.PORT || 3000,
	bodyParser	= require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res){
	res.render("index");
});

app.listen(PORT, process.env.IP, function(){
	console.log("Server is up!");
});