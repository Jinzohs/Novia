
  function checkNumber() {
            const inputNumber = document.getElementById("quantity").value;
			
			if (isNaN(inputNumber) || inputNumber === "") {
				alert("Please write a number");
				return;
			}
			
			
            if (inputNumber == 0) {
                alert("Congratulations! You have finished school!");
            }
			else if (inputNumber == 1) {
                alert("Nearly there!");
            }
			else if (inputNumber == 2) {
                alert("Still learning");
            }
			else if (inputNumber == 3) {
                alert("Sucks to be you :)");
            }
			else if (inputNumber == 4) {
                alert("I hope you are kidding..");
            }
			else if (inputNumber > 4) {
                alert("I hope you are kidding..");
            }
		
        }