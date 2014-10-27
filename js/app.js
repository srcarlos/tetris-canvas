
   var principal;
   var rect;
   
   var JSONposiciones = [ ];

   function agregar () {

   	console.log("Iniciando");
    
      // creacion del escenario
    var escenario = new Kinetic.Stage({
        container: 'myCanvas',
        width:  600,
        height:  500,
    });
 

     principal = new Kinetic.Layer();


	    // creacion de un rectangulo
    rect = new Kinetic.Rect({
	    x: 150,
	    y: 100,
	    width: 120,
	    height: 80,
	    offset: [50, 35],
  		fill: 'skyblue',
    	stroke: 'lightgray',
	    strokeWidth: 2,
	    draggable: true
	});


	 
	principal.add(rect);
   
  

 //   escenario.add(fondo);
    escenario.add(principal);
    escenario.draw();





		    //gets the canvas context
		var canvas = escenario.getContainer();
		console.log(canvas)
        
principal.on('click', function() { 

	if  (rect.isDragging() || principal.isDragging()) {

   console.log('position mouse on canvas: '+'x: ' + rect.getPosition().x + ', y: ' +  rect.getPosition().y);
    console.log ("es drag");
	} 
 
        rect.rotateDeg(30);
         principal.draw();

});


principal.on('mousemove', function(e) {

	/*if  (rect.isDragging() || principal.isDragging()) {

   console.log('position mouse on canvas: '+'x: ' + rect.getPosition().x + ', y: ' +  rect.getPosition().y);
    console.log ("es drag");
	
	} */
 


});


principal.on('dragmove', function(e) {

	if  (rect.isDragging() || principal.isDragging()) {

   console.log('Moviendose: '+'x: ' + rect.getPosition().x + ', y: ' +  rect.getPosition().y);
  
  $.ajax({
type: "POST",
url: "http://localhost/canvas.php",
data: "data",
success: "",
dataType: ""
});
	
	} 
 


});


// write out drag and drop events
principal.on('dragstart', function() {

/*		if  (rect.isDragging() || principal.isDragging()) {

   console.log('position mouse on canvas: '+'x: ' + rect.getPosition().x + ', y: ' +  rect.getPosition().y);
    console.log ("es drag");
	} */
//console.log("dragstart",rect.getPosition());
//J

//var json =  '[{"positionInicio": {"x":'+rect.getPosition().x+', "y":'+rect.getPosition().y+'}}]';

//JSONposiciones.push (json);
//console.log(json);
//JSONposiciones.push (json);
//console.log(JSONposiciones);
/*
$.ajax({
type: "POST",
url: "http://localhost/canvas.php",
data: "data",
success: "",
dataType: ""
}); */


});
principal.on('dragend', function() {
//console.log("dragend",rect.getPosition());
//posiciones.push (rect.getPosition());
//var json =  '[{"positionFin": {"x":'+rect.getPosition().x+', "y":'+rect.getPosition().y+'}}]';

//JSONposiciones.push (json);
//console.log(json);

});
var shiftPressed
window.addEventListener('keydown', function (e) {
    
     
  
    if (e.keyCode == "40") {
    	 console.log("Abajo");
        shiftPressed = true;
         rect.rotateDeg(30);
         principal.draw();

    }
   // console.log(e.keyCode)
}, true);


window.addEventListener('keyup', function (e) {
   
  
     


    if (e.keyCode == "38") {
       shiftPressed = false;
       console.log("Arriba");
	rect.rotateDeg(-30);
    principal.draw(); 
      
   }
   // console.log(shiftPressed)
}, true);

        /*

       var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');


      var rectWidth = 200;
      var rectHeight = 100;

      // translate context to center of canvas
      context.translate(200, 200);
        // rotate 45 degrees clockwise
      context.rotate(Math.PI / 4);


      context.fillStyle = 'grey';
      context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight); */
      };

