document.addEventListener('DOMContentLoaded', function (ev) {

	var dog = document.querySelector('.dog');
	var duck = document.querySelector('.duck');
	var skyWidth = document.documentElement.clientWidth - 105;
	var skyHeight = document.documentElement.clientHeight - 220;

	var dogJump = function dogJump() {
		dog.classList.remove('dog_walk');
		dog.classList.add('dog_jump');
	};

	function selectDuck() {
		duck.classList.remove('duck_fly_left', 'duck_fly_top_left', 'duck_fly_right', 'duck_fly_top_right');

        var positionX = duck.offsetTop;
        var positionY = duck.offsetLeft;			
        var x = Math.floor(Math.random()*(skyWidth));
        var y = Math.floor(Math.random()*(skyHeight));


        if ((positionX < x) && (positionY < y)) {
        		duck.classList.add('duck_fly_top_right');
			} else if ((positionX < x) && (positionY > y)) {
				duck.classList.add('duck_fly_right');
			} else if ((positionX > x) && (positionY < y)){
				duck.classList.add('duck_fly_top_left');
        	} else {
        		duck.classList.add('duck_fly_left');
        };
     
		duck.classList.add('duck_fly');
	    duck.style.left = x + 'px';
		duck.style.top = y + 'px';       

    };

	var moveDuck = function moveDuck() {
	    setInterval(function() {
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