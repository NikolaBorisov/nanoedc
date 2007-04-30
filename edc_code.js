/**
 * widden
 * @param {void} evt 
 */
 function widden() {
 	var rect, width, height;
 	
 	rect = document.getElementById("field");
 	width = parseInt(rect.getAttributeNS(null, "width"));
 	height = parseInt(rect.getAttributeNS(null, "height"));
 	width += 1;
 	height -= 1;
 	rect.setAttributeNS(null, "width", width.toString(10))
 	rect.setAttributeNS(null, "height", height.toString(10))
 }
 
 /**
  */
  function highten() {
  	var rect, width, height;
 	
 	rect = document.getElementById("field");
 	width = parseInt(rect.getAttributeNS(null, "width"));
 	height = parseInt(rect.getAttributeNS(null, "height"));
 	width -= 1;
 	height += 1;
 	rect.setAttributeNS(null, "width", width.toString(10))
 	rect.setAttributeNS(null, "height", height.toString(10))
  	  	
  }