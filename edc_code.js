/**
 * NanoEDC, Team 2 Project
 */
 
//Namespace
var svgNS = "http://www.w3.org/2000/svg";
var is_3D = false;
var total_amount = 300, square_pattern = "white", cube_pattern = "url(#sugarPattern)";
var left_scale = 1; right_scale = 1;
var sim_time = 60, delay = 2;
var time0 = (new Date()).valueOf();

/*
 * Deleting the elements on the right side of the screan.
 */  
function clean_group(group_name)
{
	var gr, i;
  	
  	gr = document.getElementById(group_name);
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


function init()
{
 //   alert(document.getDocumentElement().getAttribute("height"));
    if ( is_3D == false ) {
        createButton("menu_left", "init_left_or_right(1,\"leftGroup\")", 20, 25, "1");
        createButton("menu_left", "init_left_or_right(4,\"leftGroup\")", 20, 50, "4");
        createButton("menu_left", "init_left_or_right(9,\"leftGroup\")", 20, 75, "9");
        createButton("menu_left", "init_left_or_right(16,\"leftGroup\")", 20, 100, "16");
        createButton("menu_left", "init_left_or_right(25,\"leftGroup\")", 20, 125, "25");
        createButton("menu_left", "init_left_or_right(49,\"leftGroup\")", 20, 150, "49");
        createButton("menu_left", "init_left_or_right(100,\"leftGroup\")", 20, 175, "100");
        createButton("menu_left", "init_left_or_right(144,\"leftGroup\")", 20, 200, "144");
        createButton("menu_left", "init_left_or_right(400,\"leftGroup\")", 20, 225, "400");

        createButton("menu_right", "init_left_or_right(1,\"rightGroup\")", 20, 25, "1");
        createButton("menu_right", "init_left_or_right(4,\"rightGroup\")", 20, 50, "4");
        createButton("menu_right", "init_left_or_right(9,\"rightGroup\")", 20, 75, "9");
        createButton("menu_right", "init_left_or_right(16,\"rightGroup\")", 20, 100, "16");
        createButton("menu_right", "init_left_or_right(25,\"rightGroup\")", 20, 125, "25");
        createButton("menu_right", "init_left_or_right(49,\"rightGroup\")", 20, 150, "49");
        createButton("menu_right", "init_left_or_right(100,\"rightGroup\")", 20, 175, "100");
        createButton("menu_right", "init_left_or_right(144,\"rightGroup\")", 20, 200, "144");
        createButton("menu_right", "init_left_or_right(400,\"rightGroup\")", 20, 225, "400");
    } else {
        createButton("menu_left", "init_left_or_right(1,\"leftGroup\")", 20, 25, "1");
        createButton("menu_left", "init_left_or_right(2,\"leftGroup\")", 20, 50, "8");
        createButton("menu_left", "init_left_or_right(3,\"leftGroup\")", 20, 75, "27");
        createButton("menu_left", "init_left_or_right(4,\"leftGroup\")", 20, 100, "64");
        createButton("menu_left", "init_left_or_right(5,\"leftGroup\")", 20, 125, "125");

        createButton("menu_right", "init_left_or_right(1,\"rightGroup\")", 20, 25, "1");
        createButton("menu_right", "init_left_or_right(2,\"rightGroup\")", 20, 50, "8");
        createButton("menu_right", "init_left_or_right(3,\"rightGroup\")", 20, 75, "27");
        createButton("menu_right", "init_left_or_right(4,\"rightGroup\")", 20, 100, "64");
        createButton("menu_right", "init_left_or_right(5,\"rightGroup\")", 20, 125, "125");
    }
}

function change_mode() {
    is_3D = !is_3D;
    clean_group("leftGroup");
    clean_group("rightGroup");
    clean_group("menu_left");
    clean_group("menu_right");
    init();
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


var dist_between = 12;

function init_left_or_right(x,group_name) {
    clean_group(group_name);

    
    var i, j;

 
    if ( is_3D ) {

        var num = parseInt(x);
        var sq_size = total_amount/num;
        var p = Math.sqrt(num*num*num), cnt=0;
        for ( i=0 ; cnt<num*num*num ; i++ ) {
            for ( j=0 ; j<p && cnt<num*num*num ; j++ ) {
                cnt++;
                var px,py;
                px = j*(sq_size + dist_between);
                py = i*(sq_size + dist_between);

                var g = document.createElement("g");
                g.setAttribute("transform", "translate(" + px.toString(10) + "," + py.toString(10) + ")," + 
                                        "scale(" + (1/num).toString(10) + ")");
                var r = createSquareOrCube(total_amount);
                g.appendChild(r);
                var group = document.getElementById(group_name);
                group.appendChild(g);            
            }
        }
    } else {
        var num = Math.sqrt(parseInt(x));
        var sq_size = total_amount/num;

        for ( i=0 ; i<num ; i++ ) {
            for ( j=0 ; j<num ; j++ ) {
                var px,py;
                px = i*(sq_size + dist_between);
                py = j*(sq_size + dist_between);
                                
                var g = document.createElement("g");
                g.setAttribute("transform", "translate(" + px.toString(10) + "," + py.toString(10) + ")," + 
                                            "scale(" + (1/num).toString(10) + ")");
                var r = createSquareOrCube(total_amount);
                g.appendChild(r);
                var group = document.getElementById(group_name);
                group.appendChild(g);            
            }
        }

    }
    if ( group_name == "leftGroup" ) {
        left_scale = 1/num;
    } else {
        right_scale = 1/num;
    }
}



function createSquareOrCube(size) {
    var r = document.createElement("rect");
    r.setAttribute("width", size.toString(10));
    r.setAttribute("height", size.toString(10));
    if ( is_3D ) 
        r.setAttribute("fill",cube_pattern);
    else
        r.setAttribute("fill",square_pattern);
    return r;
}



function simulate() {
    var left_gr = document.getElementById("leftGroup");
    for (i=0 ; i<left_gr.childNodes.length ; i++ ) {
        animate_obj(left_gr.childNodes.item(i), left_scale);
    }

    var right_gr = document.getElementById("rightGroup");
    for (i=0 ; i<right_gr.childNodes.length ; i++ ) {
        animate_obj(right_gr.childNodes.item(i), right_scale);
    }

}

function animate_obj(gr, scale) {
    var dur = scale * sim_time;
    var begin = ((new Date()).valueOf() - time0)/1000;
    var sim;

    sim = document.createElement("animateTransform");
    sim.setAttribute("attributeName", "transform");
    sim.setAttribute("attributeType", "XML");
    sim.setAttribute("type", "scale");
    sim.setAttribute("additive", "sum");
    sim.setAttribute("from", "1");
    sim.setAttribute("to", "0");
    sim.setAttribute("begin", begin+delay);
    sim.setAttribute("dur", dur.toString(10) + "s");
    sim.setAttribute("fill", "freeze");

    gr.appendChild(sim);
}

