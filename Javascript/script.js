		let start = new Date().getTime();
		let bestTime;

		
		function getRandomColor() {

		  const letters = '0123456789ABCDEF';

		  var color = '#';

		  for (var i = 0; i < 6; i++) {

		    color += letters[Math.floor(Math.random() * 16)];

		  }

		  return color;

		}

		function makeShapeAppear() {

		let top = Math.random() * 400;

		let left = Math.random() * 400;

		let width = Math.random() * 400;

		let height = Math.random() * 400;

		if (Math.random() > 0.5) {

			document.getElementById("shape").style.borderRadius = "50%";

		} else {

			document.getElementById("shape").style.borderRadius = "0%";

		}

		document.getElementById("shape").style.backgroundColor = getRandomColor();

		document.getElementById("shape").style.width = width + "px";

		document.getElementById("shape").style.height = height + "px";

		document.getElementById("shape").style.top = top + "px";

		document.getElementById("shape").style.left = left + "px";
 	
 		document.getElementById("shape").style.display = "block";

 		start = new Date().getTime();

 		


 		}

 		function appearAfterDelay() {

 			setTimeout(makeShapeAppear, Math.random() + 2000);

 		}


		appearAfterDelay();

		

		document.getElementById("shape").onclick = function() {
	

			document.getElementById("shape").style.display = "none";

			var end = new Date().getTime();

			var timeTaken = (end - start) / 1000;
			
			if ((timeTaken < bestTime ) || ( typeof bestTime == "undefined")) {

				bestTime = timeTaken;
			
				document.getElementById("bestTime").innerHTML = bestTime + "s"; 
			}
			
		
			document.getElementById("timeTaken").innerHTML = timeTaken + "s";
			
			appearAfterDelay();
		}
		
		

		

			
		


