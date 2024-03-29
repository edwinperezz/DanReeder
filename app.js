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
});
app.get("/dodgerphoto",function(req,res){
	res.render("dodger");
});
app.get("/1975", function(req,res){
	res.render("1975");
})
app.get("/comingsoon",function(req,res){
	res.render("comingsoon");
});
app.get("/1976comingsoon",function(req,res){
	res.render("1976comingsoon");
});
app.get("/1977comingsoon",function(req,res){
	res.render("1977comingsoon");
});
app.get("/1979comingsoon",function(req,res){
	res.render("1979comingsoon");
});
app.get("/1980comingsoon",function(req,res){
	res.render("1980comingsoon");
});
app.get("/1981comingsoon",function(req,res){
	res.render("1981comingsoon");
});
app.get("/1982comingsoon",function(req,res){
	res.render("1982comingsoon");
});
app.get("/1975/lunchtime", function(req,res){
	res.render("lunchtime");
});
app.get("/1975/lbfestival", function(req,res){
	res.render("lbfestival");
});
app.get("/1975/roxy", function(req,res){
	res.render("roxy");
});
app.get("/1975/agoura", function(req,res){
	res.render("agoura");
});
app.get("/1975/starlight", function(req,res){
	res.render("starlight");
});
app.get("/1975/LBStateWByron", function(req,res){
	res.render("LBStateWByron");
});
app.get("/1975/rodneylbstate", function(req,res){
	res.render("rodneylbstate");
});
app.get("/1975/palomino", function(req,res){
	res.render("palomino");
});
app.get("/1975/dodger", function(req,res){
	res.render("1975dodger");
});
app.get("/1975/dodger/backstage", function(req,res){
	res.render("dodgerbackstage");
});
app.get("/1975/dodger/onstage", function(req,res){
	res.render("dodgeronstage");
});
app.get("/other", function(req,res){
	res.render("others");
});

app.listen(PORT, process.env.IP, function(){
	console.log("Server is up!");
});