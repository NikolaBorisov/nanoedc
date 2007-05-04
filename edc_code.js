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
  
  function create_sq()
  {
	  alert("HI");
	  var box = document.forms[0].sl;
	  var n = box.options[box.selectedIndex].value
	  alert(n);
	  var size = 20, dist = 5;
	  var xStart = 600, yStart = 20;
	  var i, j;
	  
	  for(i = 0; i < n; i++)
	  	for(j = 0; j < n; j++)
		{
			var newRect = document.createElementNS(svgNS,"rect");
	      newRect.setAttributeNS(null,"width", size);	
    	  newRect.setAttributeNS(null,"height", size);
	      newRect.setAttributeNS(null,"x", xStart + i*(size + dist));		
    	  newRect.setAttributeNS(null,"y", yStart + j*(size + dist));	
	      //newRect.setAttributeNS(null,"fill-opacity",Math.random());		
    	  //var red = Math.round(Math.random() * 255);
	      //var green = Math.round(Math.random() * 255);
    	  //var blue = Math.round(Math.random() * 255);
	      //newRect.setAttributeNS(null,"fill","rgb("+ red +","+ green+","+blue+")");
	      newRect.setAttributeNS(null,"fill","blue");
    	  document.getElementById("firstGroup").appendChild(newRect);	  
		}
  }