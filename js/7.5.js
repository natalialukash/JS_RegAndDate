let str=prompt("Введите URL адрес");
re=/^[https:\/\/]+[\w]+[\w\.]+$/g;
if (re.test(str)) alert("Строка является URL адресом")
else alert("Строка не является URL адресом")

//https://