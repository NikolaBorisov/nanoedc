/**
 * NanoEDC, Team 2 Project
 */
 
//Namespace
var svgNS = "http://www.w3.org/2000/svg";
var is_3D = false;
var total_amount = 300, big_side = 10, square_pattern = "url(#sugarSquarePattern)", cube_pattern = "url(#sugarCubePattern)";
var left_scale = 0; right_scale = 0;
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

/*
 * Initializes the screen by putting the buttons. 
 */
function init()
{
    left_scale = 0;
    right_scale = 0;
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

function reload() {
    //Clean old animations and buttons and objects
    clean_group("leftGroup");
    clean_group("rightGroup");
    clean_group("textFieldLeft");
    clean_group("textFieldRight");
    left_scale = right_scale = 0;
}

/*
 * Changes the mode of the simulation from 2D to 3D and back.
 */
function change_mode() {
    var text;
    if ( is_3D ) {
        total_amount = 300;
        text = "3D";
    } else {
        total_amount = 200;
        text = "2D";
    }
    is_3D = !is_3D;

    //Clean old animations and buttons and objects
    reload();
    clean_group("menu_left");
    clean_group("menu_right");

    
    //Change the text inside the button
    var txt = document.getElementById("3d_button_text");
    txt.removeChild(txt.childNodes.item(0));
    txt.appendChild(document.createTextNode(text));

    //Recreate appropriate buttons
    init();
}

function createButton(menu_name, onclick_function, x, y, text)
{
    var g, menu;
    menu = document.getElementById(menu_name);
    g = document.createElement("g");
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
    clean_group("textFieldLeft");
    clean_group("textFieldRight");


    
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
    var i;
    
    var left_gr = document.getElementById("leftGroup");
    for (i=0 ; i<left_gr.childNodes.length && left_scale ; i++ ) {
        animate_obj(left_gr.childNodes.item(i), left_scale);
    }

    var right_gr = document.getElementById("rightGroup");
    for (i=0 ; i<right_gr.childNodes.length && right_scale ; i++ ) {
        animate_obj(right_gr.childNodes.item(i), right_scale);
    }

    add_text();
}

function add_text() {
    if ( left_scale ) {
        add_text_to(document.getElementById("textFieldLeft"), left_scale);
    }
    if ( right_scale ) {
        add_text_to(document.getElementById("textFieldRight"), right_scale);   
    }
}

function add_text_to(obj, scale) {
    if ( !is_3D ) {
        var side = big_side*scale;
        var num_sq = (big_side/side)*(big_side/side);

        var single_sq_area = side*side;
        var total_area = big_side*big_side;
        var single_sq_cir = 4*side;
        var total_cir = num_sq*single_sq_cir;
        var cir_to_area_ratio = total_cir/total_area;
        var time_to_dissolve = sim_time*scale;


        create_text_el(obj, 15, "single square side lenght: ", side);
        create_text_el(obj, 30, "number of squares: ", num_sq);
        create_text_el(obj, 45, "single square area: ", single_sq_area);
        create_text_el(obj, 60, "total area: ", total_area);
        create_text_el(obj, 75, "single square circumference: ", single_sq_cir);
        create_text_el(obj, 90, "total circumference: ", total_cir);
        create_text_el(obj, 105, "circumference/area ratio: ", cir_to_area_ratio);
        create_text_el(obj, 120, "time needed to dissolve: ", time_to_dissolve);
    } else {
        var side = big_side*scale;
        var num_cubes = (big_side/side)*(big_side/side)*(big_side/side);

        var single_cube_volume = side*side*side;
        var total_volume = big_side*big_side*big_side;
        var single_cube_surface_area = 6*side*side;
        var total_surface_area = num_cubes*single_cube_surface_area;
        var S_to_V_ratio = total_surface_area/total_volume;
        var time_to_dissolve = sim_time*scale;

        create_text_el(obj, 15, "single cube side lenght: ", side);
        create_text_el(obj, 30, "number of cubes: ", num_cubes);
        create_text_el(obj, 45, "single cube volume: ", single_cube_volume);
        create_text_el(obj, 60, "total volume: ", total_volume);
        create_text_el(obj, 75, "single cube surface area: ", single_cube_surface_area);
        create_text_el(obj, 90, "total surface area: ", total_surface_area);
        create_text_el(obj, 105, "surface area/volume ratio: ", S_to_V_ratio);
        create_text_el(obj, 120, "time needed to dissolve: ", time_to_dissolve);

    }
}

function create_text_el(obj, y, text, num) {
    var t = document.createElement("text");
    var num_text = (Math.round(num*1000)/1000).toString(10);
    t.setAttribute("y", y.toString(10));
    t.appendChild(document.createTextNode(text+num_text));
    obj.appendChild(t);
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

