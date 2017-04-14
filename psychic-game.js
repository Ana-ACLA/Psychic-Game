


// I need the user to make a choice of letter.
// I need the computer to make a choice of letter.
// I need to capture those letter choices.
// I need to compare the user and the computer choices for win or loss.
// I need to display the results to the user
// I need to display the number of guesses user has left.
// I need to display the number of guesser user has so far.

	var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	var win = 0;
	var loss = 0;
	var gleft = 11;
	var wrongLetterArray = [];

	var computerGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
 
 	function pickNum(){
 		computerGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
 	}

	document.onkeyup = function (event) {
		var userGuess = event.key;
  		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		console.log (userGuess);
		console.log (computerGuess);

		gleft--;
		

			document.getElementById("gleft").innerHTML = gleft;

		if (gleft === 0) {
			loss ++; 
			gleft = 11;
			pickNum();

			document.getElementById("loss").innerHTML = loss;
		}

		else if (userGuess === computerGuess) {
			win ++;
			gleft = 11;
			pickNum();

			document.getElementById("win").innerHTML = win;
		}
				//Tried to get this function to populate array of guesses so far but

	wrongLetterArray.push(userGuess);		
	document.getElementById("gsfar").textContent = wrongLetterArray;
			

	}

	// if ((userGuess === computerGuess)) {
	// 	win++;

	// 	alert("Win " + win);
	// }

	// else if ((userGuess !== computerGuess)) {
	// 	loss++;

	// 	alert("Loss "+ loss);
	// }




