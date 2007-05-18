/**
 * NanoEDC, Team 2 Project
 */
 
//Namespace
var svgNS = "http://www.w3.org/2000/svg";
var is_3D = false;
var time0 = (new Date()).valueOf();

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
    var width, height, x, y, speed, delay=10;
    var begin = ((new Date()).valueOf() - time0)/1000;
    x = parseInt(el.getAttribute("x"));
    y = parseInt(el.getAttribute("y"));
    size = parseInt(el.getAttribute("width"));
    speed = (size/anim_speed).toString(10)+"s";


    var anim = document.createElement("animate");
    anim.setAttribute("attributeType","XML");
    anim.setAttribute("attributeName","width");
    anim.setAttribute("from",size.toString(10));
    anim.setAttribute("to","0");
    anim.setAttribute("begin",begin+delay);
    anim.setAttribute("dur",speed);
    anim.setAttribute("fill","freeze");
    el.appendChild(anim);

    anim = document.createElement("animate");
    anim.setAttribute("attributeType","XML");
    anim.setAttribute("attributeName","height");
    anim.setAttribute("from",size.toString(10));
    anim.setAttribute("to","0");
    anim.setAttribute("begin",begin+delay);
    anim.setAttribute("dur",speed);
    anim.setAttribute("fill","freeze");
    el.appendChild(anim);

    anim = document.createElement("animate");
    anim.setAttribute("attributeType","XML");
    anim.setAttribute("attributeName","x");
    anim.setAttribute("from",x.toString(10));
    anim.setAttribute("to",(x+size/2).toString(10));
    anim.setAttribute("begin",begin+delay);
    anim.setAttribute("dur",speed);
    anim.setAttribute("fill","freeze");
    el.appendChild(anim);

    anim = document.createElement("animate");
    anim.setAttribute("attributeType","XML");
    anim.setAttribute("attributeName","y");
    anim.setAttribute("from",y.toString(10));
    anim.setAttribute("to",(y+size/2).toString(10));
    anim.setAttribute("begin",begin+delay);
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
			newRect.setAttribute("fill","url(#sugarPattern)");
			document.getElementById("secondGroup").appendChild(newRect);
                        animate_disolve(newRect);
		}
        animate_disolve(document.getElementById("field"));
}

function createButton(menu_name, onclick_function, x, y, text)
{
    var g, menu;
    menu = document.getElementById(menu_name);
    g = document.createElement("g");
//    g.setAttribute("id", "button" + x.toString(10) + "," + y.toString(10));
    g.setAttribute("transform", "translate(" + x.toString(10) + "," + y.toString(10) + ")");
    g.setAttribute("onclick", onclick_function);
    var r;
    r = document.createElement("rect");
    r.setAttribute("width", "50");
    r.setAttribute("height", "20");
    r.setAttribute("rx", "3");
    r.setAttribute("ry", "3");  
    r.setAttribute("fill", "url(#buttonGradient)");
    g.appendChild(r);

    var t;
    t = document.createElement("text");
    t.setAttribute("x", "17");
    t.setAttribute("y", "15");
    t.setAttribute("fill", "white");
    t.appendChild(document.createTextNode(text));
    g.appendChild(t);
    
    menu.appendChild(g);
}

function init()
{
 //   alert(document.getDocumentElement().getAttribute("height"));
    if ( is_3D == false ) {
        createButton("menu_left", "initLeft(1)", 20, 25, "1");
        createButton("menu_left", "initLeft(4)", 20, 50, "4");
        createButton("menu_left", "initLeft(9)", 20, 75, "9");
        createButton("menu_left", "initLeft(16)", 20, 100, "16");
        createButton("menu_left", "initLeft(25)", 20, 125, "25");
        createButton("menu_left", "initLeft(49)", 20, 150, "49");
        createButton("menu_left", "initLeft(100)", 20, 175, "100");
        createButton("menu_left", "initLeft(144)", 20, 200, "144");
        createButton("menu_left", "initLeft(400)", 20, 225, "400");

        createButton("menu_right", "initRight(1)", 20, 25, "1");
        createButton("menu_right", "initRight(4)", 20, 50, "4");
        createButton("menu_right", "initRight(9)", 20, 75, "9");
        createButton("menu_right", "initRight(16)", 20, 100, "16");
        createButton("menu_right", "initRight(25)", 20, 125, "25");
        createButton("menu_right", "initRight(49)", 20, 150, "49");
        createButton("menu_right", "initRight(100)", 20, 175, "100");
        createButton("menu_right", "initRight(144)", 20, 200, "144");
        createButton("menu_right", "initRight(400)", 20, 225, "400");
    } else {

    }
}

