let day1=prompt("Введите дату в формате гг,мм,дд")
//здесь должна быть регулярка на проверку ввода даты
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
alert(getDayOfWeek(numDay))



