var numbers = [];
var nr_pariate = [];
var index_array = -1;
var counter = -1;

function addNumbers() {
	++index_array;
  numbers[index_array] = document.getElementById("numbers").value;
}

function generateNumber() {
	++counter;
  nr_pariate[counter] = Math.floor(Math.random() * 6 + 1);
}

function compareArrays() {
	if (numbers == nr_pariate) {
  document.getElementById("message").innerText = "won";
  } else {
    document.getElementById("message").innerText = "lost";

  }
}
