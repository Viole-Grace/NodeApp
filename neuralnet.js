var express=require('express')
var app=express()
const brain=require('brain.js')

const network=new brain.NeuralNetwork();
network.train([
	{ input:[42,63,1], output:[0] },
	{ input:[40,66,1], output:[1] },
	{ input:[48,69,1], output:[1] },
	{ input:[51,58,0], output:[0] },
	{ input:[64,78,1], output:[1] },
	{ input:[30,33,1], output:[0] }
	]);
console.log("Visit localhost:5000/take_data.html on your browser")
app.get('/take_data.html' ,function(req, res)
{
	console.log("Page entered")
	res.sendFile(__dirname+'/'+'take_data.html')
});
app.get('/insert' ,function(req, res)
{
	console.log("Inserted Successfully!")
	console.log(req.query)
	var eat_it=req.query.will_eat;
	var will_burn=0;
	console.log(eat_it)
	if(eat_it=="YES")
		val=0
	else
		val=1
	const output=network.run([req.query.otemp, req.query.itemp, will_burn])
	console.log(output)
	if(output<=0.5)
		res.end("Enjoy your hotdog!")
	else
		res.end('YOU WILL BURN YOUR TONGUE')
});
app.listen(5000)