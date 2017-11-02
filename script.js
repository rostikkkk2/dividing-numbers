var flag = false;

var ask_num_one;
var ask_num_two;

while (flag == false) {
  ask_num_one = +prompt("введите число");
  if (ask_num_one > 0 && !isNaN(ask_num_one)){
    flag = true;
  }
}

var flag = false;

while (flag == false) {
  ask_num_two = +prompt("на какое число вы хотите поделить?");
  if (ask_num_two > 0 && !isNaN(ask_num_two)){
    flag = true;
  }
}

var res = ask_num_one / ask_num_two;

if(ask_num_one % ask_num_two == 0){
  alert(res + " - результат без остачи");
}else{
  alert(res + " - результат с остачей");
}
