angularRoutingApp.controller('homeController', function($scope,$state,$http){
$scope.portafolio=false;
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 5.0698307, lng: -75.5173124},
	  scrollwheel: false,
	  zoom: 15
	});
	 var center = map.getCenter();
	 google.maps.event.trigger(map, "resize");
	 map.setCenter(center);


	$scope.fn_cerrarPortalio= function(){
		$scope.portafolio=false;
		document.getElementById('video').pause();
		document.getElementById('video').currentTime = 0;
	}
	var timeout=15000;
	$scope.enviarCorreo= function(){
		alert("Enviar correo");
		$http({
            method: 'GET',
            url: 'php/enviarCorreo.php?nombre='+$scope.nombre+"&email="+$scope.email+"&asunto="+$scope.asunto+"&mensaje="+$scope.mensaje,
            data: {"prueba":"prueba"},
            timeout: timeout
        }).then(function(data) {
           console.log(data.data)
        },function(data) {
             console.log(data)
        });
	}
	$scope.aMedia=
	[
	   {
		"descripcion":"App para acercar  usuarios al sistema de salud.",
		"titulo":"clicsalud",
		"video":"videos/Clicsalud.mp4",
		"imagen":"img/clicsalud.jpg"
	   },
	   {
		"descripcion":"TUtorial para amigos.",
		"titulo":"tutorial",
		"video":"videos/video2.mp4",
		"imagen":"img/clicsalud.jpg"
	   }				   
	];

	/*$scope.aTestimonio=
	[
	   {
		"nombre":"Jorge Hernán Franco.",
		"cargo":"Coordinador de prácticas Universidad de Manizales<",
		"foto":"img/yeison.jpg",
		"opinion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ipsum repellat. Aut nobis, saepe perferendis consequatur dignissimos ullam provident, soluta veniam asperiores atque. Eius tempore praesentium quod ipsa, odio voluptate."
	   },
	   {
		"nombre":"Esteban correa",
		"cargo":"Coordinador de prácticas Universidad de Manizales<",
		"foto":"img/yeison.jpg",
		"opinion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ipsum repellat. Aut nobis, saepe perferendis consequatur dignissimos ullam provident, soluta veniam asperiores atque. Eius tempore praesentium quod ipsa, odio voluptate."
	   }				   
	];*/

	//indice del contenido
	$scope.index=-1;
	$scope.fn_transicion= function(sentido){
		$scope.portafolio=true;
		var elemento = document.getElementById('video');
		if(sentido!='next' && sentido!='prev'){
			document.getElementById('video').src=$scope.aMedia[sentido].video;
			$scope.index=sentido;
		}
		
		if(sentido=='next'){
		$scope.index++;
			if($scope.aMedia.length<= $scope.index ){
				$scope.index=0;
			}
			$scope.currentVideo=$scope.aMedia[$scope.index];
			document.getElementById('video').src=$scope.aMedia[$scope.index].video;
			$scope.transicion="next";
			elemento.classList.remove($scope.transicion);
			void elemento.offsetWidth;
			elemento.classList.add($scope.transicion);
		}

		if(sentido=='prev'){
			$scope.index--;
			if($scope.index<=-1 ){
				$scope.index=$scope.aMedia.length-1;
			}
			document.getElementById('video').src=$scope.aMedia[$scope.index].video;
			$scope.transicion="prev";
			elemento.classList.remove($scope.transicion);
			void elemento.offsetWidth;
			elemento.classList.add($scope.transicion);
		}
		document.getElementById('video').play();
	}
	$scope.ver_seccion=function(seccion){

	    if(document.getElementById(seccion).id!="home" ){

		    angular.forEach(document.querySelectorAll("section"), function(value, key){
		    	if(value.id!="home"){
		    		document.getElementById(value.id).style.display='none';
		    		document.getElementById(value.id).classList.remove('mostrar_seccion');

		    	}

			})
			var elemento = document.getElementById(seccion);
			if(elemento.classList.value.search('mostrar')==-1){
				document.getElementById(seccion).style.display='inline-block';
				elemento.classList.add('mostrar_seccion');
				elemento.classList.remove('remover_seccion');	


			}
			else{
				elemento.classList.add('remover_seccion');
				elemento.classList.remove('mostrar_seccion');
				document.getElementById(seccion).style.display='none';
	
			}
		}

	}

});
