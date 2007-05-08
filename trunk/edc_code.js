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
   		gr.removeChild(gr.childNodes.item(i));
        
}

var anim_speed = 10;

function animate_disolve(el) {
    var width, height, x, y, speed, delay="10";
    x = parseInt(el.getAttribute("x"));
    y = parseInt(el.getAttribute("y"));
    size = parseInt(el.getAttribute("width"));
    speed = (size/anim_speed).toString(10)+"s";


    var anim = document.createElement("animate");
    anim.setAttribute("attributeType","XML");
    anim.setAttribute("attributeName","width");
    anim.setAttribute("from",size.toString(10));
    anim.setAttribute("to","0");
    anim.setAttribute("begin",delay);
    anim.setAttribute("dur",speed);
    anim.setAttribute("fill","freeze");
    el.appendChild(anim);

    anim = document.createElement("animate");
    anim.setAttribute("attributeType","XML");
    anim.setAttribute("attributeName","height");
    anim.setAttribute("from",size.toString(10));
    anim.setAttribute("to","0");
    anim.setAttribute("begin",delay);
    anim.setAttribute("dur",speed);
    anim.setAttribute("fill","freeze");
    el.appendChild(anim);

    anim = document.createElement("animate");
    anim.setAttribute("attributeType","XML");
    anim.setAttribute("attributeName","x");
    anim.setAttribute("from",x.toString(10));
    anim.setAttribute("to",(x+size/2).toString(10));
    anim.setAttribute("begin",delay);
    anim.setAttribute("dur",speed);
    anim.setAttribute("fill","freeze");
    el.appendChild(anim);

    anim = document.createElement("animate");
    anim.setAttribute("attributeType","XML");
    anim.setAttribute("attributeName","y");
    anim.setAttribute("from",y.toString(10));
    anim.setAttribute("to",(y+size/2).toString(10));
    anim.setAttribute("begin",delay);
    anim.setAttribute("dur",speed);
    anim.setAttribute("fill","freeze");
    el.appendChild(anim);
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
			var newRect = document.createElement("rect");
			newRect.setAttribute("width", size.toString(10));
			newRect.setAttribute("height", size.toString(10));
			newRect.setAttribute("x", (xStart + i*(size + dist)).toString(10));
			newRect.setAttribute("y", (yStart + j*(size + dist)).toString(10));
			newRect.setAttribute("fill","white");
			document.getElementById("secondGroup").appendChild(newRect);
                        animate_disolve(newRect);
		}
        animate_disolve(document.getElementById("field"));
}
