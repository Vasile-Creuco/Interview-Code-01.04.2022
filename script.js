var digits_of_number = [];
var bet_numbers = [];
var sum_money = 0;
var index = 0;
var equals = 0;

//save the sum of money for bet
function betMoney() {
    sum_money = document.getElementById("sum_money").value;
    document.getElementById("message").innerText = sum_money;
}

//save the dice numbers
function playDice() {
    var numbers = document.getElementById("numbers").value;
    let index = 0;
    while (numbers) {
        digits_of_number[index] = number % 10;
        number /= 10;
        ++index;
    }
}

//check and display whether it is a winner or loser
function resultGame() {
    bet_numbers[index] = Math.floor(Math.random() * 6 + 1);
    ++index;
    bet_numbers[index] = Math.floor(Math.random() * 6 + 1);
    for (var i = 0; i < bet_numbers.length; ++i) {
        if (bet_numbers[i] == digits_of_number[i]) {
            ++equals;
        }
    }
    if (equals == 2) {
        document.getElementById("message").innerText = "I won " + sum_money * 2 + "!";
    } else {
        document.getElementById("message").innerText = "I lost all money!";
    }
}
