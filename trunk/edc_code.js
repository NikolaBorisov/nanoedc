/**
 * NanoEDC, Team 2 Project
 */
 
//Namespace
var svgNS = "http://www.w3.org/2000/svg";


/*
 * Deleting the elements on the right side of the screan.
 */  
function clean_right()
{
	var gr, i;
  	
  	gr = document.getElementById("secondGroup");
  	for (i=gr.childNodes.length-1 ; i>=0 ; i-- )
  		gr.removeChild(gr.childNodes[i]);
}
  
function start()
{
  	var size, dist = 5;
	var xStart = 600, yStart = 20;
	var i, j, n;	  
	
   	n = parseInt(prompt("Input the number of squeres to partition"))
   	n = Math.sqrt(n);
   	size = 300/n;
   	clean_right();
	for(i = 0; i < n; i++)
		for(j = 0; j < n; j++)
		{
			var newRect = document.createElementNS(svgNS,"rect");
			newRect.setAttributeNS(null,"width", size.toString(10));
			newRect.setAttributeNS(null,"height", size.toString(10));
			newRect.setAttributeNS(null,"x", (xStart + i*(size + dist)).toString(10));
			newRect.setAttributeNS(null,"y", (yStart + j*(size + dist)).toString(10));
			newRect.setAttributeNS(null,"fill","blue");
			document.getElementById("secondGroup").appendChild(newRect);	  
		}
}
