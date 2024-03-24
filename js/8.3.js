let day1=prompt("Введите дату в формате гг-мм-дд") 
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
return `${dayWeek[num-1]}, ${dayWeek[num]}, ${dayWeek[num+1]}`;}
alert (getDayOfWeek(numDay))




