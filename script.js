let digits_of_dice = [];
let bet_numbers = [];
let sum_money = 0;
let is_equals = 0;
let equals = 0;

//save the sum of money for bet
function betMoney() {
    sum_money = document.getElementById("sum_money").value;
    document.getElementById("message").innerText = sum_money;
}

function playDice() {
    let first_value = document.getElementById("number_dice").value;
    let second_value = document.getElementById("number_dice1").value;
    digits_of_dice[0] = first_value;
    digits_of_dice[1] = second_value;
    bet_numbers[0] = Math.floor(Math.random() * 6 + 1);
    bet_numbers[1] = Math.floor(Math.random() * 6 + 1);
    if (bet_numbers[0] == digits_of_dice[0] && bet_numbers[1] == digits_of_dice[1]) {
        equals += 1;
    } else if (bet_numbers[0] == digits_of_dice[1] && bet_numbers[1] == digits_of_dice[0]) {
        is_equals += 1;
    }
    if (equals == 1 || is_equals == 1) {
        document.getElementById("message").innerText = "I won " + sum_money * 2 + "!";
    } else {
        document.getElementById("message").innerText = "I lost all money!";
    }
}
