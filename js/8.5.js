let DR=prompt("Введите свою дату рождения");
let dataBirthday=new Date(DR)
let dataToday=new Date()
console.log(`Вы живете на этом свете ${((dataToday-dataBirthday)/(1000*60*60*24*365)).toFixed(0)} лет, ${12-(dataBirthday.getMonth()-dataToday.getMonth())} месяцев и ${(dataToday.getDate()-dataBirthday.getDate())} дней`)