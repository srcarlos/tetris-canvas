
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
	 
	// 
 	principal.add(rect);
    escenario.add(principal);
    escenario.draw();


      var canvas = escenario.getContainer();
	  //console.log(canvas)
        
  // evento cuando le den click para que gire  
 principal.on('click', function() { 

      	rect.rotateDeg(30);
         principal.draw();


        console.log('Moviendose: '+'x: ' + rect.getPosition().x + ', y: ' +  rect.getPosition().y);
});


// evento para cuando se mueva el layer
principal.on('dragmove', function(e) {

	if  (rect.isDragging() || principal.isDragging()) {

   //console.log('Moviendose: '+'x: ' + rect.getPosition().x + ', y: ' +  rect.getPosition().y);
   var json =  '[{"positionInicio": {"x":'+rect.getPosition().x+', "y":'+rect.getPosition().y+'}}]';


   console.log('Moviendose: '+json);
  
  $.ajax({
type: "POST",
url: "http://localhost/canvas.php",
data: "data",
success: "",
dataType: ""
});
	
	} 
 


});


  // evento cuando inicie el drag
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

  // evento cuando finalice el drag
principal.on('dragend', function() {
//console.log("dragend",rect.getPosition());
//posiciones.push (rect.getPosition());
//var json =  '[{"positionFin": {"x":'+rect.getPosition().x+', "y":'+rect.getPosition().y+'}}]';

//JSONposiciones.push (json);
//console.log(json);

});



var shiftPressed
  // agregando evento cuando presione Abajo
window.addEventListener('keydown', function (e) {
    
     
  
    if (e.keyCode == "40") {
    	 console.log("Abajo");
        shiftPressed = true;
         rect.rotateDeg(30);
         principal.draw();

    }
   // console.log(e.keyCode)
}, true);


  // agregando evento cuando presione Arriba
window.addEventListener('keyup', function (e) {
 
    if (e.keyCode == "38") {
       shiftPressed = false;
       console.log("Arriba");
	rect.rotateDeg(-30);
    principal.draw(); 
      
   }
   // console.log(shiftPressed)
}, true);

   
 };

