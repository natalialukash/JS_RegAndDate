let str=prompt("Введите имя переменной");
re=/^[a-z\$_]+[\w\$]+$/ig;
if (re.test(str)) alert("Имя переменной корректно")
else alert("Имя переменной некорректно")    
