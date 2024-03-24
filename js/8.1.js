let day1=prompt("Введите дату в формате гг-мм-дд")
//re=/^((19[0-9])|(20[0-2][0-4]))-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[01]))$/;
//if (re.test(day1)) alert (getDayOfWeek(numDay))
//else alert("Дата введена некорректно")  
let isDay=(day2)=>day2=new Date(day1);
let numDay=isDay()
function getDayOfWeek(numDay){
dayWeek=['Воскресенье',
'Понедельник',
'Вторник',
'Среда',
'Четверг',
'Пятница',
'Суббота'];
num=numDay.getDay();
return dayWeek[num];}
alert (getDayOfWeek(numDay))



