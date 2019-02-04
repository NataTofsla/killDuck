document.addEventListener('DOMContentLoaded', function (ev) {

	var dog = document.querySelector('.dog');
	var duck = document.querySelector('.duck');
	var skyWidth = document.documentElement.clientWidth - 105;
	var skyHeight = document.documentElement.clientHeight - 226;

	var dogJump = function dogJump() {
		dog.classList.remove('dog_walk');
		dog.classList.add('dog_jump');
	};

	function duckRight() {
		duck.classList.add('duck_fly');		
		duck.classList.add('duck_fly_right');
		duck.style.left = skyWidth + 'px';
	};

	function duckLeft() {
		duck.classList.add('duck_fly');					
		duck.classList.add('duck_fly_left');
		duck.style.left = '5px';
	};

		function duckRightTop() {
		duck.classList.add('duck_fly');				
		duck.classList.add('duck_fly_top_right');
		duck.style.left = skyWidth + 'px';
		duck.style.top = '15px';		
	};

		function duckLeftTop() {
		duck.classList.add('duck_fly');				
		duck.classList.add('duck_fly_top_left');
		duck.style.left = '5px';
		duck.style.top = '15px';
	};


	function selectDuck() {
		duck.classList.remove('duck_fly_left', 'duck_fly_top_left', 'duck_fly_right', 'duck_fly_top_right');
	
		var rand2 = Math.round(0.5 + Math.random() * 4);
		
		switch (rand2) {
			case 1:
				duckRight();
				break;
			case 2:
				duckLeft();
				break;
			case 3:
				duckRightTop();
				break;
			default:
				duckLeftTop();
				break;
		};



    };

	var moveDuck = function moveDuck() {
	    setInterval(function() {
			duck.style.top = skyHeight + 'px';		    	
	    	selectDuck();   
	    },3000);

	};

	var startGame = function startGame() {
		dog.classList.add('dog_walk');
		setTimeout(dogJump, 5000);
		setTimeout(moveDuck, 5000);		
		window.removeEventListener('click', startGame);		
	};

	window.addEventListener('click', startGame);

	duck.addEventListener('click', function (ev) {
		duck.classList.remove('duck_fly');
		alert('Убили уточку(');
		moveDuck();
	});

});