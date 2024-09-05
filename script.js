
  function checkNumber() {
            const inputNumber = document.getElementById("quantity").value;
            if (inputNumber == 0) {
                alert("Congratulations! You have finished school!");
            }
			if (inputNumber == 1) {
                alert("Nearly there!");
            }
			if (inputNumber == 2) {
                alert("Still learning");
            }
			if (inputNumber == 3) {
                alert("Sucks to be you :)");
            }
				if (inputNumber == 4) {
                alert("I hope you are kidding..");
            }
			if (inputNumber > 4) {
                alert("I hope you are kidding..");
            }
		
        }