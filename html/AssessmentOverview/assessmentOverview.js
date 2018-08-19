/**
 * 
 */

function makePentagone(g,scaleSize,positionX,positionY){
d3.select(g).append("polygon")
	.attr("points", "150,0 258,62.5 258,187.5 150,250 42,187.6 42,62.5")
	.attr("fill","rgb(255,255,255)")
	.attr("stroke","black")
	.attr("stroke-width",5)
	.attr("transform","translate(" + positionX + "," + positionY + ")  scale(" + scaleSize + ")");
}

function makeCircle(g,scaleSize,positionX,positionY){
	d3.select(g).append("circle")
	.attr("r", scaleSize)
	.attr("cx",positionX)
	.attr("cy",positionY)
	.attr("fill","rgb(255,255,255)")
	.attr("stroke","black");
}

function makeTriangle(g,scaleSize,positionX,positionY){
	d3.select(g).append("polygon")
	.attr("points","05,30 15,10 25,30")
	.attr("fill","rgb(255,255,255)")
	.attr("stroke","black")
	.attr("transform","translate(" + positionX + "," + positionY + ")  scale(" + scaleSize + ")");
}

function makeRectangle(g,scaleSize,positionX,positionY){
	d3.select(g).append("rect")
	.attr("width",20)
	.attr("height",20)
	.attr("fill","rgb(255,255,255)")
	.attr("stroke","black")
	.attr("transform","translate(" + positionX + "," + positionY + ")  scale(" + scaleSize + ")");
}

function makeTextField(g,scaleSize,positionX,positionY,text){
	d3.select(legend).append("text")
		.text(text)
		.attr("x",positionX)
		.attr("y",positionY);
}

function makeLegend(){
	makeCircle(legend,11,16,20);
	makeTextField(legend,1,30,25,"Exercise");
	makeTriangle(legend,1.1,0,25);
	makeTextField(legend,1,30,52,"Task");
	makeRectangle(legend,1,7,67);
	makeTextField(legend,1,30,81,"Test");
	makePentagone(legend,0.1,2,92);
	makeTextField(legend,1,30,110,"On the job evaluation");
}