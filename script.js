var i = 0;

var ask_num_one;
var ask_num_two;

while (i == 0) {
  ask_num_one = +prompt("введите число");
  if (ask_num_one > 0 && !isNaN(ask_num_one)){
    i = 1;
  }
}

var i = 0;

while (i == 0) {
  ask_num_two = +prompt("на какое число вы хотите поделить?");
  if (ask_num_two > 0 && !isNaN(ask_num_two)){
    i = 1;
  }
}

var res = ask_num_one / ask_num_two;

if(ask_num_one % ask_num_two == 0){
  alert(res + " без остачи");
}else{
  alert(res + " с остачей");
}
