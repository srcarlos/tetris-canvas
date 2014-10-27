

document.getElementById("myCanvas").addEventListener('contextmenu', function (event) {
  event.preventDefault();
});
console.log("Creando Variables Iniciales");



// Declarcion de Variables
   var i =0; // Simulando la generacion de IDS
   var indexAnterior=0;
   var escenario;
   var principal;
   var JSONArreglos = [ ];
   var colores = ['#D24D57','#446CB3', '#03C9A9', 'skyblue', '#EB974E' ,'#D35400' ,'grey'];



    // creacion del escenario
    escenario = new Kinetic.Stage({
    	container: 'myCanvas',
    	width:  600,
    	height:  300,
    });

    principal = new Kinetic.Layer();

  	 // agregando nuevo layer
   	 escenario.add(principal);
  	 escenario.draw();



 // Funcion para Crear Rectangulos
 function addRect () {

  
   
   var index = Math.floor(Math.random()*colores.length);
  
  while (index==indexAnterior){
    
    if (index==indexAnterior ){
      index =Math.floor(Math.random()*colores.length);
    }
    
  };

  console.log (index +"---"+indexAnterior)

 	var rectangulo = new Kinetic.Rect({
 		x: 200,
 		y: 0,
 		width: 120,
 		height: 80,
 		offset: [50, 35],
 		fill: colores[index],
 		stroke: 'lightgray',
 		strokeWidth: 2,
 		draggable: true,
 		id: ""+i++
 	});



 	indexAnterior = index;

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
  		rectangulo.rotateDeg(-20);
  		principal.draw(); 

  	}
   // console.log(shiftPressed)
}, true);

    


     // evento cuando le den click para que gire  
     rectangulo.on('click', function() { 

	   //  console.log(principal);
	   this.rotateDeg(20);
	   principal.draw();
         console.log(this);

	   	   //console.log('Moviendose: '+'x: ' + rect.getPosition().x + ', y: ' +  rect.getPosition().y);
	     var json =  '[  {"id":'+this.getId() +' , "rotation":'+this.getRotation() +' , "width":'+this.getWidth() +' ,	 "height":'+this.getHeight() +' ,    "fill":'+this.getFill() +' ,    "stroke":'+this.getStroke() +' ,	  "strokeWidth":'+this.getStrokeWidth() +' ,	"draggable":'+false +' ,"position": {"x":'+this.getPosition().x+', "y":'+this.getPosition().y+'}}]';
         JSONArreglos[this.getId()]= json;
	});


 


	// evento para cuando se mueva el layer
	rectangulo.on('dragmove', function(e) {

		//if  (rect.isDragging() || principal.isDragging()) {



	   //console.log('Moviendose: '+'x: ' + rect.getPosition().x + ', y: ' +  rect.getPosition().y);
	     var json =  '[  {"id":'+this.getId() +' , "rotation":'+this.getRotation() +' , "width":'+this.getWidth() +' ,	 "height":'+this.getHeight() +' ,    "fill":'+this.getFill() +' ,    "stroke":'+this.getStroke() +' ,	  "strokeWidth":'+this.getStrokeWidth() +' ,	"draggable":'+false +' ,"position": {"x":'+this.getPosition().x+', "y":'+this.getPosition().y+'}}]';
         JSONArreglos[this.getId()]= json;

	   console.log('Moviendose: '+JSONArreglos);
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

        var vectorY = 50;
        var anim = new Kinetic.Animation(function(frame) {
          var angleDiff = frame.timeDiff * angularSpeed / 1000;
        //  rectangulo.rotate(angleDiff);
             
            rectangulo.setY(vectorY);
             vectorY+=1;


             
             if (rectangulo.getY() == escenario.getHeight() - rectangulo.getHeight()) {

					anim.stop();
					//addRect ();

             }
             	 var json =  '[  {"id":'+rectangulo.getId() +', "rotation":'+rectangulo.getRotation() +' , "width":'+rectangulo.getWidth() +' ,	 "height":'+rectangulo.getHeight() +' ,    "fill":"'+rectangulo.getFill() +'"  ,    "stroke":"'+rectangulo.getStroke() +'"  ,	  "strokeWidth":'+rectangulo.getStrokeWidth() +' ,	"draggable":'+false +' ,"position": {"x":'+rectangulo.getPosition().x+', "y":'+rectangulo.getPosition().y+'}}]';
                 JSONArreglos[rectangulo.getId()]= json;

                console.log(JSONArreglos);
        }, principal);

        anim.start();

             
	    	// creacion de un rectangulo
	    	principal.add( rectangulo);
	    	principal.draw();



	 


	    };



 escenario.on('click', stgClicked);

// Para el segundo click
 function stgClicked(event) {
     if (event.button == 2) {
         alert('rightclick');
         var node = event.targetNode;
         console.log(node);
     }
 }


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

//---------------------PANEL PARA EL SEGUNDO USUARIO------------------------------------------------------------

  

   
// Funcion para agregar
function refresh () {

	   // creacion del escenario
    var escenario2 = new Kinetic.Stage({
    	container: 'OtheUserCanvas',
    	width:  600,
    	height:  300,
    });


	 var principal2 = new Kinetic.Layer();

  	 // agregando nuevo layer
   	 escenario2.add(principal2);
  	 escenario2.draw();


    


 for (var i = 0; i < JSONArreglos.length; i++) {
 
 	
var obj = jQuery.parseJSON(JSONArreglos[i]);
	console.log(obj[0].width) ;
 	   var rectangulo = new Kinetic.Rect({
 		x:   obj[0].position.x,
 		y:  obj[0].position.y,
 		width: obj[0].width,
 		height: obj[0].height,
 		rotation: obj[0].rotation,
 		offset: [50, 35],
 		fill: obj[0].fill,
 		stroke: obj[0].stroke,
 		strokeWidth:obj[0].strokeWidth,
 		draggable:obj[0].draggable,
 		id:obj[0].id, 
 	});

 	   	// creacion de un rectangulo
	    	principal2.add( rectangulo);
	    	principal2.draw();


 };






  }
   



window.setInterval(function(){
refresh ()
}, 500);

