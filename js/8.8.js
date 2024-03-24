let dayNewYear=new Date("2024-01-01");
dayOfWeekNewYear=dayNewYear.getDay();
let dayRozhdestvo=new Date("2024-01-07");
dayOfWeekRozhdestvo=dayRozhdestvo.getDay();
let feb23=new Date("2024-02-23");
dayOfWeekfeb23=feb23.getDay();
let mar8=new Date("2024-03-08");
dayOfWeekmar8=mar8.getDay();
let may1=new Date("2024-05-01");
dayOfWeekmay1=may1.getDay();
let may9=new Date("2024-05-09");
dayOfWeekmay9=may9.getDay();
let june12=new Date("2024-06-12");
dayOfWeekjune12=june12.getDay();
let nov4=new Date("2024-11-04");
dayOfWeeknov4=nov4.getDay();
let dayWeek=['воскресенье',
'понедельник',
'вторник',
'среда',
'четверг',
'пятница',
'суббота'];
console.log(`1 января это ${dayWeek[dayOfWeekNewYear]}`);
console.log(`7 января это ${dayWeek[dayOfWeekRozhdestvo]}`);
console.log(`23 февраля это ${dayWeek[dayOfWeekfeb23]}`);
console.log(`8 марта это ${dayWeek[dayOfWeekmar8]}`);
console.log(`1 мая это ${dayWeek[dayOfWeekmay1]}`);
console.log(`9 мая это ${dayWeek[dayOfWeekmay9]}`);
console.log(`12 июня это ${dayWeek[dayOfWeekjune12]}`);
console.log(`4 ноября это ${dayWeek[dayOfWeeknov4]}`);
