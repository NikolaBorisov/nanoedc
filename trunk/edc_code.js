/**
 * NanoEDC, Team 2 Project
 */
 
 //Namespace
 var svgNS = "http://www.w3.org/2000/svg";
 
 function widden() {
 	var rect, width, height;
 	
 	rect = document.getElementById("field");
 	width = parseInt(rect.getAttributeNS(null, "width"));
 	height = parseInt(rect.getAttributeNS(null, "height"));
 	width += 4;
 	height -= 4;
 	rect.setAttributeNS(null, "width", width.toString(10))
 	rect.setAttributeNS(null, "height", height.toString(10))
 }
 
 /**
  */
  function highten() {
  	var rect, width, height;
 	
 	rect = document.getElementById("firstGroup");
 	width = parseInt(rect.getAttributeNS(null, "width"));
 	height = parseInt(rect.getAttributeNS(null, "height"));
 	width -= 4;
 	height += 4;
 	rect.setAttributeNS(null, "width", width.toString(10))
 	rect.setAttributeNS(null, "height", height.toString(10))
  	  	
  }
  
function clean_right()
{
	var gr, i;
  	
  	gr = document.getElementById("secondGroup");
  	alert(gr.childNodes.length.toString(10));
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
