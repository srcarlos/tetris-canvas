

console.log("Creando Variables Iniciales");



// Declarcion de Variables
   var i =0; // Simulando la generacion de IDS
   var escenario;
   var principal;
   var JSONposiciones = [ ];






    // creacion del escenario
    escenario = new Kinetic.Stage({
    	container: 'myCanvas',
    	width:  600,
    	height:  500,
    });


    principal = new Kinetic.Layer();


   // agregando nuevo layer
   escenario.add(principal);
   escenario.draw();



 // Funcion para Crear Rectangulos
 function addRect () {


 	var rectangulo = new Kinetic.Rect({
 		x: 200,
 		y: 0,
 		width: 120,
 		height: 80,
 		offset: [50, 35],
 		fill: 'skyblue',
 		stroke: 'lightgray',
 		strokeWidth: 2,
 		draggable: true,
 		id: ""+i++
 	});

    	  // agregando evento cuando presione Abajo
    	  window.addEventListener('keydown', function (e) {



    	  	if (e.keyCode == "40") {
    	  		console.log("Abajo");
    	  		rectangulo.rotateDeg(30);
    	  		principal.draw();

    	  	}
   // console.log(e.keyCode)
}, true);


  // agregando evento cuando presione Arriba
  window.addEventListener('keyup', function (e) {

  	if (e.keyCode == "38") {
  		console.log("Arriba");
  		rectangulo.rotateDeg(-30);
  		principal.draw(); 

  	}
   // console.log(shiftPressed)
}, true);


     // evento cuando le den click para que gire  
     rectangulo.on('click', function() { 

	   //  console.log(principal);
	   this.rotateDeg(30);
	   principal.draw();


	   console.log('Rotando: '+'x: ' + this.getPosition().x + ', y: ' +  this.getPosition().y);
	});


	// evento para cuando se mueva el layer
	rectangulo.on('dragmove', function(e) {

		//if  (rect.isDragging() || principal.isDragging()) {

	   //console.log('Moviendose: '+'x: ' + rect.getPosition().x + ', y: ' +  rect.getPosition().y);
	   var json =  '[{"id":'+this.getId() +' ,"position": {"x":'+this.getPosition().x+', "y":'+this.getPosition().y+'}}]';


	   console.log('Moviendose: '+json);
	  // Se realiza el ajax

	  $.ajax({
	  	type: "POST",
	  	url: "http://localhost/canvas.php",
	  	data: "data",
	  	success: "",
	  	dataType: ""
	  });

		//}// fin del if 


	});



      // one revolution per 4 seconds
        var angularSpeed = 360 / 4;
        var anim = new Kinetic.Animation(function(frame) {
          var angleDiff = frame.timeDiff * angularSpeed / 1000;
          rectangulo.rotate(angleDiff);
   
        }, principal);

        anim.start();

        
	    	// creacion de un rectangulo
	    	principal.add( rectangulo);
	    	principal.draw();



	 


	    };







// Funcion para agregar
function agregar () {




// creacion de un rectangulo
   /* rect = new Kinetic.Rect({
	    x: 150,
	    y: 100,
	    width: 120,
	    height: 80,
	    offset: [50, 35],
  		fill: 'skyblue',
    	stroke: 'lightgray',
	    strokeWidth: 2,
	    draggable: true
	});*/



	// 
 	//principal.add(rect);



      //var canvas = escenario.getContainer();
	  //console.log(canvas)




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





};

