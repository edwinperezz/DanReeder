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
app.get("/about", function(req,res){
	res.render("about");
});
app.get("/contact", function(req,res){
	res.render("sale");
});
app.get("/book", function(req,res){
	res.render("book");
});
app.get("/book/captions", function(req,res){
	res.render("captions");
})
app.get("/dodgerphoto",function(req,res){
	res.render("dodger");
})


app.listen(PORT, process.env.IP, function(){
	console.log("Server is up!");
});